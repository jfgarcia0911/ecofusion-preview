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

        const [courses, canEdit] = await Promise.all([
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
            isPlatformOwner(session.user.id),
        ]);

        return NextResponse.json({
            currency: courseCurrency(),
            canEdit,
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

// PUT - Set prices. Body: { prices: { [courseId]: cents | null } }, null meaning
// "not for sale". Only the courses named are touched.
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

        const { prices } = await request.json();
        if (!prices || typeof prices !== 'object' || Array.isArray(prices)) {
            return NextResponse.json({ error: 'prices must be an object' }, { status: 400 });
        }

        const wanted = new Map<string, number | null>();
        for (const [courseId, value] of Object.entries(prices as Record<string, unknown>)) {
            if (value === null) {
                wanted.set(courseId, null);
                continue;
            }
            if (typeof value !== 'number') {
                return NextResponse.json({ error: 'Each price must be a number or empty' }, { status: 400 });
            }
            const problem = priceProblem(value);
            if (problem) return NextResponse.json({ error: problem }, { status: 400 });
            wanted.set(courseId, value);
        }
        if (wanted.size === 0) {
            return NextResponse.json({ error: 'No prices to set' }, { status: 400 });
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
        if (changed.length) {
            await prisma.$transaction(
                changed.map((course) =>
                    prisma.trainingCourse.update({
                        where: { id: course.id },
                        data: { priceCents: wanted.get(course.id) ?? null },
                    })
                )
            );

            const currency = courseCurrency();
            const show = (cents: number | null) =>
                cents === null ? 'not for sale' : formatPrice(cents, currency);
            const lines = changed
                .slice(0, 8)
                .map((c) => `${c.code} ${show(c.priceCents)} to ${show(wanted.get(c.id) ?? null)}`);
            await logStaffAccess(session.user.id, null, 'write', {
                method: 'PUT',
                path: '/api/admin/course-prices',
                summary:
                    `Changed the price of ${changed.length} course${changed.length === 1 ? '' : 's'}: ` +
                    lines.join(', ') +
                    (changed.length > 8 ? `, and ${changed.length - 8} more` : ''),
            });
        }

        return NextResponse.json({ changed: changed.length });
    } catch (error) {
        console.error('Failed to set course prices:', error);
        return NextResponse.json({ error: 'Failed to save the prices' }, { status: 500 });
    }
}
