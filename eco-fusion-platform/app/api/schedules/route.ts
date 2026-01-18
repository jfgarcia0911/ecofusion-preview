import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch schedules (admin sees all, users see their own)
export async function GET() {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';

        const schedules = await prisma.schedule.findMany({
            where: isAdmin ? {} : { assigneeId: session.user.id },
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
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const { assigneeId, title, description, dayOfWeek, startTime, endTime, location, recurring, color } = data;

        if (!assigneeId || !title || dayOfWeek === undefined || !startTime || !endTime) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const schedule = await prisma.schedule.create({
            data: {
                adminId: session.user.id,
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
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const scheduleId = searchParams.get('id');

        if (!scheduleId) {
            return NextResponse.json({ error: 'Schedule ID required' }, { status: 400 });
        }

        await prisma.schedule.delete({
            where: { id: scheduleId },
        });

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
