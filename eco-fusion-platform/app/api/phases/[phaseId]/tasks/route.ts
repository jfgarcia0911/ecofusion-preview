import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch tasks for a phase
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;

    const tasks = await prisma.task.findMany({
      where: {
        userId: session.user.id,
        phaseId,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Failed to fetch phase tasks:', error);
    return NextResponse.json({ error: 'Failed to fetch phase tasks' }, { status: 500 });
  }
}

// POST - Create a task for a phase
export async function POST(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;
    const data = await request.json();
    const { text, assignee, priority, dueDate } = data;

    if (!text) {
      return NextResponse.json({ error: 'Task text is required' }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        userId: session.user.id,
        phaseId,
        text,
        assignee: assignee || null,
        priority: priority || 'medium',
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to create phase task:', error);
    return NextResponse.json({ error: 'Failed to create phase task' }, { status: 500 });
  }
}

// PATCH - Update a task
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;
    const data = await request.json();
    const { taskId, completed, text, assignee, priority, dueDate } = data;

    if (!taskId) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    // Verify task belongs to user and phase
    const existingTask = await prisma.task.findFirst({
      where: { id: taskId, userId: session.user.id, phaseId },
    });
    if (!existingTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    const task = await prisma.task.update({
      where: { id: taskId },
      data: {
        completed: completed !== undefined ? completed : undefined,
        text: text !== undefined ? text : undefined,
        assignee: assignee !== undefined ? assignee : undefined,
        priority: priority !== undefined ? priority : undefined,
        dueDate: dueDate !== undefined ? (dueDate ? new Date(dueDate) : null) : undefined,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to update phase task:', error);
    return NextResponse.json({ error: 'Failed to update phase task' }, { status: 500 });
  }
}

// DELETE - Delete a task
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('taskId');

    if (!taskId) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    // Verify task belongs to user and phase
    const existingTask = await prisma.task.findFirst({
      where: { id: taskId, userId: session.user.id, phaseId },
    });
    if (!existingTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    await prisma.task.delete({ where: { id: taskId } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete phase task:', error);
    return NextResponse.json({ error: 'Failed to delete phase task' }, { status: 500 });
  }
}
