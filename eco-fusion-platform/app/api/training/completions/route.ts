import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch completion records
export async function GET(request: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';

        // If specific user requested and requester is admin, get that user's completions
        // Otherwise get the current user's completions
        const targetUserId = (userId && isAdmin) ? userId : session.user.id;

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
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
        const certificateId = `CERT-${course.code}-${session.user.id.slice(-6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

        // Create or update completion record
        const completion = await prisma.courseCompletion.upsert({
            where: {
                courseId_userId: { courseId, userId: session.user.id }
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
                userId: session.user.id,
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
                assigneeId: session.user.id
            },
            data: {
                status: 'completed'
            }
        });

        // Create notification for completion
        if (passed) {
            await prisma.notification.create({
                data: {
                    userId: session.user.id,
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
