import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import {
  adminOnly,
  optionalDate,
  optionalText,
  recordId,
  requiredText,
} from '@/lib/validation/fields';

const PRIORITIES = ['low', 'medium', 'high'] as const;

/** Most tasks one unit's list returns. */
const MAX_TASKS = 500;

const createSchema = z.object({
  text: requiredText(2000),
  // A name from the directory, shown as written.
  assignee: optionalText(120),
  priority: z.enum(PRIORITIES).optional(),
  dueDate: optionalDate,
});

const updateSchema = z.object({
  taskId: recordId,
  completed: z.boolean().optional(),
  text: requiredText(2000).optional(),
  assignee: optionalText(120),
  priority: z.enum(PRIORITIES).optional(),
  dueDate: optionalDate,
});

/** Whether `phaseId` is one of this business's units. */
async function unitInBusiness(phaseId: string, organizationId: string) {
  const unit = await prisma.businessUnit.findFirst({
    where: { organizationId, key: phaseId },
    select: { id: true },
  });
  return unit !== null;
}

const unitNotFound = () =>
  NextResponse.json({ error: 'Business unit not found' }, { status: 404 });

// GET - Fetch tasks for a phase
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;

    const [known, tasks] = await Promise.all([
      unitInBusiness(phaseId, ctx.organizationId),
      prisma.task.findMany({
        where: {
          organizationId: ctx.organizationId,
          phaseId,
        },
        orderBy: { createdAt: 'desc' },
        take: MAX_TASKS,
      }),
    ]);
    if (!known) return unitNotFound();

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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;
    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (!(await unitInBusiness(phaseId, ctx.organizationId))) return unitNotFound();

    const task = await prisma.task.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        phaseId,
        text: input.text,
        assignee: input.assignee ?? null,
        priority: input.priority ?? 'medium',
        dueDate: input.dueDate ?? null,
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;
    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { taskId, ...changes } = body.data;

    const where = { id: taskId, organizationId: ctx.organizationId, phaseId };
    const { count } = await prisma.task.updateMany({
      where,
      data: {
        completed: changes.completed,
        text: changes.text,
        assignee: changes.assignee,
        priority: changes.priority,
        dueDate: changes.dueDate,
      },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    const task = await prisma.task.findFirst({ where });
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;
    const taskId = new URL(request.url).searchParams.get('taskId')?.trim();
    if (!taskId || taskId.length > 200) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    const where = { id: taskId, organizationId: ctx.organizationId, phaseId };
    const existingTask = await prisma.task.findFirst({
      where,
      select: { userId: true },
    });
    if (!existingTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    // Anybody may remove their own task; somebody else's takes a manager.
    if (existingTask.userId !== ctx.userId && !canAdminister(ctx)) {
      return adminOnly("delete other people's tasks");
    }

    const { count } = await prisma.task.deleteMany({ where });
    if (count === 0) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete phase task:', error);
    return NextResponse.json({ error: 'Failed to delete phase task' }, { status: 500 });
  }
}
