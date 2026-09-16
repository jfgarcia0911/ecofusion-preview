import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import {
  adminOnly,
  idFromQuery,
  optionalDate,
  optionalText,
  recordId,
  requiredText,
} from '@/lib/validation/fields';

const PRIORITIES = ['low', 'medium', 'high'] as const;

/** Most tasks the list returns. Incomplete ones come first. */
const MAX_TASKS = 500;

const createSchema = z.object({
  text: requiredText(2000),
  priority: z.enum(PRIORITIES).optional(),
  dueDate: optionalDate,
  // A business unit key; checked against this business below.
  phaseId: optionalText(60),
  assignee: optionalText(120),
});

const updateSchema = z.object({
  id: recordId,
  completed: z.boolean().optional(),
  text: requiredText(2000).optional(),
  priority: z.enum(PRIORITIES).optional(),
  dueDate: optionalDate,
  assignee: optionalText(120),
});

// GET - This business's tasks
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const tasks = await prisma.task.findMany({
      where: { organizationId: ctx.organizationId },
      orderBy: [
        { completed: 'asc' },
        { priority: 'asc' },
        { createdAt: 'desc' },
      ],
      take: MAX_TASKS,
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

// POST - Create a new task
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (input.phaseId) {
      const unit = await prisma.businessUnit.findFirst({
        where: { organizationId: ctx.organizationId, key: input.phaseId },
        select: { id: true },
      });
      if (!unit) {
        return NextResponse.json({ error: 'Business unit not found' }, { status: 404 });
      }
    }

    const task = await prisma.task.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        text: input.text,
        priority: input.priority ?? 'medium',
        dueDate: input.dueDate ?? null,
        phaseId: input.phaseId ?? null,
        assignee: input.assignee ?? null,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Failed to create task:', error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

// PATCH - Update a task
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    const where = { id, organizationId: ctx.organizationId };
    const { count } = await prisma.task.updateMany({
      where,
      data: {
        completed: changes.completed,
        text: changes.text,
        priority: changes.priority,
        dueDate: changes.dueDate,
        assignee: changes.assignee,
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
    console.error('Failed to update task:', error);
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}

// DELETE - Delete a task
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    const where = { id, organizationId: ctx.organizationId };
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
    console.error('Failed to delete task:', error);
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}
