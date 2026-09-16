import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { visibleToOrganization } from '@/lib/training';

/** How soon before expiry a certificate may be renewed. The Academy shows "Expiring soon" from here. */
const RENEWAL_WINDOW_DAYS = 30;

// POST - Start renewing a certificate: the learner's lesson progress in the
// course is cleared, so the course is taken again from the first lesson.
//
// Only once the certificate is due - inside its last 30 days or past them -
// so this cannot be used to wipe progress on a course being taken for the
// first time. The certificate itself stands until a new one replaces it.
export async function POST(
    _request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (ctx.isStaff) {
            return NextResponse.json({ error: 'An EcoFusion account has no training record' }, { status: 403 });
        }

        const { courseId } = await params;
        const course = await prisma.trainingCourse.findFirst({
            where: { id: courseId, ...visibleToOrganization(ctx.organizationId) },
            select: { id: true, renewalDays: true },
        });
        if (!course) {
            return NextResponse.json({ error: 'Your business does not have that course' }, { status: 404 });
        }

        const completion = await prisma.courseCompletion.findUnique({
            where: { courseId_userId: { courseId, userId: ctx.userId } },
            select: { expiresAt: true },
        });
        const dueFrom = completion?.expiresAt
            ? completion.expiresAt.getTime() - RENEWAL_WINDOW_DAYS * 86_400_000
            : null;
        if (!course.renewalDays || dueFrom === null || Date.now() < dueFrom) {
            return NextResponse.json({ error: 'This certificate is not due for renewal yet' }, { status: 409 });
        }

        await prisma.lessonCompletion.deleteMany({
            where: { userId: ctx.userId, lesson: { courseId } },
        });

        return NextResponse.json({ renewing: true });
    } catch (error) {
        console.error('Failed to start renewal:', error);
        return NextResponse.json({ error: 'Failed to start renewal' }, { status: 500 });
    }
}
