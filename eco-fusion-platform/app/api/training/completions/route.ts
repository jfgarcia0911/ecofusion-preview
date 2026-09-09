import { NextResponse } from 'next/server';
import { canAdminister, isSameOrganization } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch completion records
export async function GET(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        const isAdmin = canAdminister(ctx);

        // If specific user requested and requester is admin, get that user's completions
        // Otherwise get the current user's completions
        const targetUserId = (userId && isAdmin) ? userId : ctx.userId;

        if (targetUserId !== ctx.userId && !(await isSameOrganization(ctx, targetUserId))) {
            return NextResponse.json(
                { error: 'That person is not a member of this organization' },
                { status: 403 }
            );
        }

        const completions = await prisma.courseCompletion.findMany({
            where: { userId: targetUserId },
            include: {
                course: {
                    select: {
                        id: true,
                        code: true,
                        title: true,
                        category: true,
                        duration: true,
                        renewalDays: true,
                        isRequired: true
                    }
                }
            },
            orderBy: { completedAt: 'desc' }
        });

        // Add renewal status
        const now = new Date();
        const completionsWithStatus = completions.map(completion => {
            let renewalStatus = 'current';
            let daysUntilRenewal = null;

            if (completion.course.renewalDays && completion.expiresAt) {
                const expiresAt = new Date(completion.expiresAt);
                const daysRemaining = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                daysUntilRenewal = daysRemaining;

                if (daysRemaining < 0) {
                    renewalStatus = 'expired';
                } else if (daysRemaining <= 30) {
                    renewalStatus = 'expiring_soon';
                }
            }

            return {
                ...completion,
                renewalStatus,
                daysUntilRenewal
            };
        });

        return NextResponse.json(completionsWithStatus);
    } catch (error) {
        console.error('Failed to fetch completions:', error);
        return NextResponse.json({ error: 'Failed to fetch completions' }, { status: 500 });
    }
}

// POST - Record course completion
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        // A support account is not a trainee. It has no training record of its
        // own, so there is nothing here for it to complete.
        if (ctx.isStaff) {
            return NextResponse.json(
                { error: 'An EcoFusion account has no training record' },
                { status: 403 }
            );
        }

        const data = await request.json();
        const { courseId, quizScore } = data;

        if (!courseId) {
            return NextResponse.json({ error: 'Course ID required' }, { status: 400 });
        }

        // Get course details
        const course = await prisma.trainingCourse.findUnique({
            where: { id: courseId }
        });

        if (!course) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        // Determine if passed
        const passed = quizScore ? quizScore >= course.passScore : true;

        // Calculate expiration date if renewal required
        const expiresAt = course.renewalDays
            ? new Date(Date.now() + course.renewalDays * 24 * 60 * 60 * 1000)
            : null;

        // Generate certificate ID
        const certificateId = `CERT-${course.code}-${ctx.userId.slice(-6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

        // Create or update completion record
        const completion = await prisma.courseCompletion.upsert({
            where: {
                courseId_userId: { courseId, userId: ctx.userId }
            },
            update: {
                completedAt: new Date(),
                quizScore,
                passed,
                expiresAt,
                certificateId: passed ? certificateId : null
            },
            create: {
                courseId,
                userId: ctx.userId,
                quizScore,
                passed,
                expiresAt,
                certificateId: passed ? certificateId : null
            },
            include: {
                course: true
            }
        });

        // Update assignment status if exists
        await prisma.courseAssignment.updateMany({
            where: {
                courseId,
                assigneeId: ctx.userId
            },
            data: {
                status: 'completed'
            }
        });

        // Create notification for completion
        if (passed) {
            await prisma.notification.create({
                data: {
                    userId: ctx.userId,
                    title: 'Course Completed!',
                    message: `Congratulations! You've completed "${course.title}" with a ${quizScore ? `score of ${quizScore}%` : 'passing grade'}. ${expiresAt ? `Your certification is valid until ${expiresAt.toLocaleDateString()}.` : ''}`,
                    type: 'info',
                    link: '/academy'
                }
            });
        }

        return NextResponse.json(completion);
    } catch (error) {
        console.error('Failed to record completion:', error);
        return NextResponse.json({ error: 'Failed to record completion' }, { status: 500 });
    }
}
