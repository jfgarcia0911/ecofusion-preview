import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, isPlatformOwner, logStaffAccess } from '@/lib/staff';
import { courseCurrency } from '@/lib/course-shop';
import { formatPrice, priceProblem } from '@/lib/course-price';

/**
 * What each of EcoFusion's courses costs a business.
 *
 * Any EcoFusion account may read the price list; only the master account sets
 * it, since what the platform charges is the platform's own decision. Every
 * change is written to the access trail with the old price and the new one.
 *
 * Two kinds of price: one per course, and one per level for the whole level
 * bought together as a package.
 */

// GET - Every EcoFusion course with its price and how many businesses hold it.
export async function GET() {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const [courses, packages, canEdit] = await Promise.all([
            prisma.trainingCourse.findMany({
                where: { organizationId: null },
                select: {
                    id: true,
                    code: true,
                    title: true,
                    category: true,
                    duration: true,
                    isActive: true,
                    priceCents: true,
                    _count: { select: { lessons: true, grants: true } },
                },
                orderBy: { sortOrder: 'asc' },
            }),
            prisma.coursePackage.findMany({ select: { category: true, priceCents: true } }),
            isPlatformOwner(session.user.id),
        ]);

        return NextResponse.json({
            currency: courseCurrency(),
            canEdit,
            /** Levels sold whole, by level name. A level not listed has no package. */
            packages: Object.fromEntries(packages.map((p) => [p.category, p.priceCents])),
            courses: courses.map((course) => ({
                id: course.id,
                code: course.code,
                title: course.title,
                category: course.category,
                duration: course.duration,
                isActive: course.isActive,
                priceCents: course.priceCents,
                lessonCount: course._count.lessons,
                holders: course._count.grants,
            })),
        });
    } catch (error) {
        console.error('Failed to load course prices:', error);
        return NextResponse.json({ error: 'Failed to load course prices' }, { status: 500 });
    }
}

// PUT - Set prices. Body: { prices?: { [courseId]: cents | null },
// packages?: { [level]: cents | null } }, null meaning "not for sale". Only
// what is named is touched.
export async function PUT(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        if (!(await isPlatformOwner(session.user.id))) {
            return NextResponse.json(
                { error: 'Only the master account sets course prices' },
                { status: 403 }
            );
        }

        const body = await request.json();
        const isMap = (value: unknown) =>
            value === undefined || (value !== null && typeof value === 'object' && !Array.isArray(value));
        if (!isMap(body.prices) || !isMap(body.packages)) {
            return NextResponse.json({ error: 'prices and packages must be objects' }, { status: 400 });
        }

        // Read and check both lists before anything is written, so a bad
        // package price does not leave the course prices half saved.
        const read = (entries: Record<string, unknown>) => {
            const out = new Map<string, number | null>();
            for (const [key, value] of Object.entries(entries)) {
                if (value === null) {
                    out.set(key, null);
                    continue;
                }
                if (typeof value !== 'number') return 'Each price must be a number or empty';
                const problem = priceProblem(value);
                if (problem) return problem;
                out.set(key, value);
            }
            return out;
        };
        const wanted = read(body.prices ?? {});
        if (typeof wanted === 'string') return NextResponse.json({ error: wanted }, { status: 400 });
        const wantedPackages = read(body.packages ?? {});
        if (typeof wantedPackages === 'string') {
            return NextResponse.json({ error: wantedPackages }, { status: 400 });
        }
        if (wanted.size === 0 && wantedPackages.size === 0) {
            return NextResponse.json({ error: 'No prices to set' }, { status: 400 });
        }

        // A package can only be for a level that has EcoFusion courses in it.
        const levels = new Set(
            (
                await prisma.trainingCourse.findMany({
                    where: { organizationId: null },
                    select: { category: true },
                    distinct: ['category'],
                })
            ).map((course) => course.category)
        );
        const unknownLevel = [...wantedPackages.keys()].find((level) => !levels.has(level));
        if (unknownLevel) {
            return NextResponse.json({ error: `There is no level called "${unknownLevel}"` }, { status: 400 });
        }

        const courses = await prisma.trainingCourse.findMany({
            where: { id: { in: [...wanted.keys()] }, organizationId: null },
            select: { id: true, code: true, priceCents: true },
            orderBy: { sortOrder: 'asc' },
        });
        if (courses.length !== wanted.size) {
            return NextResponse.json(
                { error: 'One or more of those courses is not an EcoFusion course' },
                { status: 400 }
            );
        }

        const changed = courses.filter((course) => course.priceCents !== wanted.get(course.id));

        const existingPackages = new Map(
            (
                await prisma.coursePackage.findMany({
                    where: { category: { in: [...wantedPackages.keys()] } },
                })
            ).map((p) => [p.category, p.priceCents])
        );
        const changedPackages = [...wantedPackages.entries()].filter(
            ([level, cents]) => (existingPackages.get(level) ?? null) !== cents
        );

        if (changed.length || changedPackages.length) {
            await prisma.$transaction([
                ...changed.map((course) =>
                    prisma.trainingCourse.update({
                        where: { id: course.id },
                        data: { priceCents: wanted.get(course.id) ?? null },
                    })
                ),
                // No row is no package, so clearing a price removes the row.
                ...changedPackages.map(([category, cents]) =>
                    cents === null
                        ? prisma.coursePackage.deleteMany({ where: { category } })
                        : prisma.coursePackage.upsert({
                              where: { category },
                              create: { category, priceCents: cents },
                              update: { priceCents: cents },
                          })
                ),
            ]);

            const currency = courseCurrency();
            const show = (cents: number | null) =>
                cents === null ? 'not for sale' : formatPrice(cents, currency);
            const lines = [
                ...changedPackages.map(
                    ([level, cents]) =>
                        `${level} package ${show(existingPackages.get(level) ?? null)} to ${show(cents)}`
                ),
                ...changed.map((c) => `${c.code} ${show(c.priceCents)} to ${show(wanted.get(c.id) ?? null)}`),
            ];
            const count = changed.length + changedPackages.length;
            await logStaffAccess(session.user.id, null, 'write', {
                method: 'PUT',
                path: '/api/admin/course-prices',
                summary:
                    `Changed ${count} price${count === 1 ? '' : 's'}: ` +
                    lines.slice(0, 8).join(', ') +
                    (lines.length > 8 ? `, and ${lines.length - 8} more` : ''),
            });
        }

        return NextResponse.json({ changed: changed.length + changedPackages.length });
    } catch (error) {
        console.error('Failed to set course prices:', error);
        return NextResponse.json({ error: 'Failed to save the prices' }, { status: 500 });
    }
}
