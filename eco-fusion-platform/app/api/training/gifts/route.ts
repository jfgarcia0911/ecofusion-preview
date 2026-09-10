import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { CourseShopError, giveCourses } from '@/lib/course-shop';
import { logStaffAccess } from '@/lib/staff';
import { formatPrice } from '@/lib/course-price';
import { PERMISSIONS, type StaffPermission } from '@/lib/staff-permissions';

/**
 * EcoFusion giving a business courses, or taking them away.
 *
 * The master account, and staff it has given "Give free classes" or "Take
 * classes back". Never a business's own people: an owner buys.
 *
 * Every use writes its own line to the access trail naming the courses,
 * which is why lib/staff leaves this path out of the automatic one - a course
 * id is not something an owner reading their record can make sense of.
 */

async function allowedTo(permission: StaffPermission) {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return { ctx: null, refusal };
    // Staff without the permission are already refused by activeOrg; this
    // keeps out everybody who is not EcoFusion at all.
    if (!ctx.isMaster && !(ctx.isStaff && ctx.staffPermissions.includes(permission))) {
        return {
            ctx: null,
            refusal: NextResponse.json(
                { error: 'Only EcoFusion can give or take back courses' },
                { status: 403 }
            ),
        };
    }
    return { ctx, refusal: null };
}

function describe(courses: { code: string; title: string }[]): string {
    const names = courses.slice(0, 5).map((c) => `${c.code} ${c.title}`);
    return names.join(', ') + (courses.length > 5 ? `, and ${courses.length - 5} more` : '');
}

// POST - Give courses to this business, free.
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await allowedTo(PERMISSIONS.GIVE_CLASSES);
        if (refusal) return refusal;

        const { courseIds } = await request.json();
        if (!Array.isArray(courseIds) || courseIds.length === 0 || courseIds.some((id) => typeof id !== 'string')) {
            return NextResponse.json({ error: 'Choose at least one course' }, { status: 400 });
        }

        let given: number;
        try {
            given = await giveCourses(ctx.organizationId, courseIds, ctx.userId);
        } catch (error) {
            if (error instanceof CourseShopError) {
                return NextResponse.json({ error: error.message }, { status: error.status });
            }
            throw error;
        }

        const courses = await prisma.trainingCourse.findMany({
            where: { id: { in: courseIds } },
            select: { code: true, title: true },
            orderBy: { sortOrder: 'asc' },
        });
        await logStaffAccess(ctx.userId, ctx.organizationId, 'write', {
            method: 'POST',
            path: '/api/training/gifts',
            summary: `Gave this business ${given} course${given === 1 ? '' : 's'} free: ${describe(courses)}`,
        });

        return NextResponse.json({ given });
    } catch (error) {
        console.error('Failed to give courses:', error);
        return NextResponse.json({ error: 'Failed to give the courses' }, { status: 500 });
    }
}

// DELETE - Take a course back from this business.
//
// Whichever way it came, including a purchase: the master account has no
// limits here. Taking back a bought course does not refund it - that is done
// in Stripe, and a full refund there takes the course back by itself - so the
// line in the trail says plainly what was paid.
export async function DELETE(request: Request) {
    try {
        const { ctx, refusal } = await allowedTo(PERMISSIONS.TAKE_CLASSES);
        if (refusal) return refusal;

        const courseId = new URL(request.url).searchParams.get('courseId');
        if (!courseId) {
            return NextResponse.json({ error: 'courseId is required' }, { status: 400 });
        }

        const grant = await prisma.courseGrant.findUnique({
            where: { courseId_organizationId: { courseId, organizationId: ctx.organizationId } },
            select: {
                id: true,
                source: true,
                course: { select: { code: true, title: true } },
                purchase: { select: { currency: true, items: { where: { courseId }, select: { priceCents: true } } } },
            },
        });
        if (!grant) {
            return NextResponse.json({ error: 'This business does not have that course' }, { status: 404 });
        }

        await prisma.courseGrant.delete({ where: { id: grant.id } });

        const paid = grant.purchase?.items[0]?.priceCents;
        await logStaffAccess(ctx.userId, ctx.organizationId, 'write', {
            method: 'DELETE',
            path: '/api/training/gifts',
            summary:
                `Took back ${grant.course.code} ${grant.course.title}` +
                (grant.source === 'purchase' && paid !== undefined && grant.purchase
                    ? ` (bought for ${formatPrice(paid, grant.purchase.currency)}, not refunded)`
                    : grant.source === 'gift'
                      ? ' (had been given free)'
                      : ' (had been taken free)'),
        });

        return NextResponse.json({ removed: courseId });
    } catch (error) {
        console.error('Failed to take back a course:', error);
        return NextResponse.json({ error: 'Failed to take the course back' }, { status: 500 });
    }
}
