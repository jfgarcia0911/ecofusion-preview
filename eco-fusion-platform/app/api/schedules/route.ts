import { NextResponse } from 'next/server';
import { canAdminister } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { assignedWithin, isMemberOf } from '@/lib/schedule-scope';

// GET - Fetch schedules (admin sees this business's, users see their own)
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);

        const schedules = await prisma.schedule.findMany({
            where: isAdmin ? assignedWithin(ctx.organizationId) : { assigneeId: ctx.userId },
            include: {
                assignee: {
                    select: { id: true, name: true, email: true, image: true },
                },
                admin: {
                    select: { id: true, name: true },
                },
            },
            orderBy: [{ dayOfWeek: 'asc' }, { startTime: 'asc' }],
        });

        return NextResponse.json(schedules);
    } catch (error) {
        console.error('Failed to fetch schedules:', error);
        return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
    }
}

// POST - Create new schedule (admin only)
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const { assigneeId, title, description, dayOfWeek, startTime, endTime, location, recurring, color } = data;

        if (!assigneeId || !title || dayOfWeek === undefined || !startTime || !endTime) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Only somebody who works here can be put on this business's rota.
        if (!(await isMemberOf(String(assigneeId), ctx.organizationId))) {
            return NextResponse.json({ error: 'That person is not in this business' }, { status: 404 });
        }

        const schedule = await prisma.schedule.create({
            data: {
                adminId: ctx.userId,
                assigneeId,
                title,
                description,
                dayOfWeek,
                startTime,
                endTime,
                location,
                recurring: recurring ?? true,
                color: color ?? '#00FF9D',
            },
            include: {
                assignee: {
                    select: { id: true, name: true, email: true, image: true },
                },
            },
        });

        // Create notification for the assigned user
        await prisma.notification.create({
            data: {
                userId: assigneeId,
                title: 'New Schedule Assigned',
                message: `You have been scheduled for "${title}" on ${getDayName(dayOfWeek)} from ${startTime} to ${endTime}`,
                type: 'schedule',
                link: '/schedules',
            },
        });

        return NextResponse.json(schedule);
    } catch (error) {
        console.error('Failed to create schedule:', error);
        return NextResponse.json({ error: 'Failed to create schedule' }, { status: 500 });
    }
}

// DELETE - Delete a schedule (admin only)
export async function DELETE(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const scheduleId = searchParams.get('id');

        if (!scheduleId) {
            return NextResponse.json({ error: 'Schedule ID required' }, { status: 400 });
        }

        // Scoped rather than by id alone: an id from another business is not
        // found, instead of being deleted.
        const { count } = await prisma.schedule.deleteMany({
            where: { id: scheduleId, ...assignedWithin(ctx.organizationId) },
        });
        if (count === 0) {
            return NextResponse.json({ error: 'Schedule not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete schedule:', error);
        return NextResponse.json({ error: 'Failed to delete schedule' }, { status: 500 });
    }
}

function getDayName(day: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day] || 'Unknown';
}
