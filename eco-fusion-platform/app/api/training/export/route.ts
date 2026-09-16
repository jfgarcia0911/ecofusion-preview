import { NextResponse } from 'next/server';
import { canAdminister, isSameOrganization } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { csvRow } from '@/lib/csv';

// GET - Export training records as CSV
export async function GET(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        const format = searchParams.get('format') || 'csv';

        const isAdmin = canAdminister(ctx);

        // If specific user requested and requester is admin, export that user's records
        // Otherwise export the current user's records
        const targetUserId = (userId && isAdmin) ? userId : ctx.userId;

        if (targetUserId !== ctx.userId && !(await isSameOrganization(ctx, targetUserId))) {
            return NextResponse.json(
                { error: 'That person is not a member of this organization' },
                { status: 403 }
            );
        }

        // Get user info
        const user = await prisma.user.findUnique({
            where: { id: targetUserId },
            select: { id: true, name: true, email: true }
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Get all completions for this user
        const completions = await prisma.courseCompletion.findMany({
            where: { userId: targetUserId },
            include: {
                course: {
                    select: {
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

        // Get assignments (for courses assigned but not yet completed)
        const assignments = await prisma.courseAssignment.findMany({
            where: {
                assigneeId: targetUserId,
                status: { not: 'completed' }
            },
            include: {
                course: {
                    select: {
                        code: true,
                        title: true,
                        category: true,
                        isRequired: true
                    }
                }
            }
        });

        if (format === 'json') {
            return NextResponse.json({
                employee: user,
                exportDate: new Date().toISOString(),
                completions,
                pendingAssignments: assignments
            });
        }

        // Generate CSV
        const now = new Date();
        const csvRows: string[] = [];

        // Every cell goes through csvRow: quoted, quotes doubled, and a
        // leading = + - @ defused, since course titles and names are typed by
        // people and open in somebody's spreadsheet.
        csvRows.push(csvRow(['Training Records Export']));
        csvRows.push(csvRow(['Employee', user.name || 'N/A']));
        csvRows.push(csvRow(['Email', user.email]));
        csvRows.push(csvRow(['Export Date', now.toLocaleDateString()]));
        csvRows.push('');

        // Completed Courses Section
        csvRows.push(csvRow(['COMPLETED TRAINING']));
        csvRows.push(csvRow(['Course Code', 'Course Title', 'Category', 'Required', 'Completion Date', 'Score', 'Certificate ID', 'Expires', 'Status']));

        for (const completion of completions) {
            const expiresAt = completion.expiresAt ? new Date(completion.expiresAt) : null;
            let status = 'Current';
            if (expiresAt) {
                const daysRemaining = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                if (daysRemaining < 0) status = 'Expired';
                else if (daysRemaining <= 30) status = 'Expiring Soon';
            }

            csvRows.push(csvRow([
                completion.course.code,
                completion.course.title,
                completion.course.category,
                completion.course.isRequired ? 'Yes' : 'No',
                new Date(completion.completedAt).toLocaleDateString(),
                completion.quizScore ? `${completion.quizScore}%` : 'N/A',
                completion.certificateId || 'N/A',
                expiresAt ? expiresAt.toLocaleDateString() : 'Never',
                status
            ]));
        }

        csvRows.push('');

        // Pending Assignments Section
        if (assignments.length > 0) {
            csvRows.push(csvRow(['PENDING/IN-PROGRESS TRAINING']));
            csvRows.push(csvRow(['Course Code', 'Course Title', 'Category', 'Required', 'Status', 'Due Date']));

            for (const assignment of assignments) {
                csvRows.push(csvRow([
                    assignment.course.code,
                    assignment.course.title,
                    assignment.course.category,
                    assignment.course.isRequired ? 'Yes' : 'No',
                    assignment.status,
                    assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : 'No deadline'
                ]));
            }
        }

        csvRows.push('');
        csvRows.push(csvRow(['Total Completed', completions.length]));
        csvRows.push(csvRow(['Pending Assignments', assignments.length]));

        const csvContent = csvRows.join('\r\n');
        // A file name from the email's local part, reduced to safe characters
        // so it cannot break out of the header.
        const namePart = user.email.split('@')[0].replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 60) || 'user';

        // Return as downloadable CSV
        return new NextResponse(csvContent, {
            headers: {
                'Content-Type': 'text/csv; charset=utf-8',
                'Content-Disposition': `attachment; filename="training-records-${namePart}-${now.toISOString().split('T')[0]}.csv"`
            }
        });
    } catch (error) {
        console.error('Failed to export training records:', error);
        return NextResponse.json({ error: 'Failed to export training records' }, { status: 500 });
    }
}
