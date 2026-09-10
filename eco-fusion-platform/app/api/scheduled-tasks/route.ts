import { NextResponse } from 'next/server';
import { canAdminister } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { assignedWithin, isMemberOf } from '@/lib/schedule-scope';

// GET - Fetch scheduled tasks (admin sees all, users see their own)
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);

        const tasks = await prisma.scheduledTask.findMany({
            where: isAdmin ? assignedWithin(ctx.organizationId) : { assigneeId: ctx.userId },
            include: {
                assignee: {
                    select: { id: true, name: true, email: true, image: true },
                },
                creator: {
                    select: { id: true, name: true },
                },
            },
            orderBy: { scheduledFor: 'asc' },
        });

        return NextResponse.json(tasks);
    } catch (error) {
        console.error('Failed to fetch scheduled tasks:', error);
        return NextResponse.json({ error: 'Failed to fetch scheduled tasks' }, { status: 500 });
    }
}

// POST - Create new scheduled task (admin only)
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const { assigneeId, title, description, scheduledFor, dueDate, priority, zone, notifyBefore } = data;

        if (!assigneeId || !title || !scheduledFor || !dueDate) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Only somebody who works here can be given this business's work.
        if (!(await isMemberOf(String(assigneeId), ctx.organizationId))) {
            return NextResponse.json({ error: 'That person is not in this business' }, { status: 404 });
        }

        const task = await prisma.scheduledTask.create({
            data: {
                creatorId: ctx.userId,
                assigneeId,
                title,
                description,
                scheduledFor: new Date(scheduledFor),
                dueDate: new Date(dueDate),
                priority: priority ?? 'medium',
                zone,
                notifyBefore: notifyBefore ?? 30,
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
                title: 'New Task Assigned',
                message: `You have been assigned a new task: "${title}"`,
                type: 'task',
                link: '/schedules',
            },
        });

        return NextResponse.json(task);
    } catch (error) {
        console.error('Failed to create scheduled task:', error);
        return NextResponse.json({ error: 'Failed to create scheduled task' }, { status: 500 });
    }
}

// PATCH - Update task status
export async function PATCH(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const data = await request.json();
        const { taskId, status } = data;

        if (!taskId || !status) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Verify user is assigned to this task or is admin
        // A task from another business is not found, for anybody.
        const task = await prisma.scheduledTask.findFirst({
            where: { id: taskId, ...assignedWithin(ctx.organizationId) },
        });

        if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }

        const isAdmin = canAdminister(ctx);
        if (!isAdmin && task.assigneeId !== ctx.userId) {
            return NextResponse.json({ error: 'Not authorized' }, { status: 403 });
        }

        const updatedTask = await prisma.scheduledTask.update({
            where: { id: taskId },
            data: {
                status,
                completedAt: status === 'completed' ? new Date() : null,
            },
        });

        return NextResponse.json(updatedTask);
    } catch (error) {
        console.error('Failed to update task:', error);
        return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
    }
}
