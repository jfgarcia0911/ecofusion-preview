import { NextResponse } from 'next/server';
import { getOrgContext, canAdminister } from '@/lib/tenancy';
import { visibleToOrganization } from '@/lib/training';
import { prisma } from '@/lib/prisma';

// GET - Fetch all training courses (admin only)
export async function GET() {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        // What this farm wrote, plus what EcoFusion loaded into it. Never the
        // whole platform catalogue, which is what every farm used to receive.
        const courses = await prisma.trainingCourse.findMany({
            where: { isActive: true, ...visibleToOrganization(ctx.organizationId) },
            include: {
                lessons: {
                    select: { id: true, title: true, type: true, duration: true, sortOrder: true },
                    orderBy: { sortOrder: 'asc' }
                },
                _count: {
                    select: {
                        assignments: true,
                        completions: true
                    }
                }
            },
            orderBy: { sortOrder: 'asc' }
        });

        return NextResponse.json(courses);
    } catch (error) {
        console.error('Failed to fetch training courses:', error);
        return NextResponse.json({ error: 'Failed to fetch training courses' }, { status: 500 });
    }
}

// POST - Create a new training course (admin only)
export async function POST(request: Request) {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const {
            code,
            title,
            description,
            category,
            duration,
            isRequired,
            renewalDays,
            passScore,
        } = data;

        if (!code || !title || !description || !category || !duration) {
            return NextResponse.json({
                error: 'Code, title, description, category, and duration are required'
            }, { status: 400 });
        }

        // Codes are unique to their owner, so this farm naming a course
        // SAFETY-101 says nothing about anyone else's SAFETY-101.
        const existingCourse = await prisma.trainingCourse.findFirst({
            where: { code, organizationId: ctx.organizationId },
        });

        if (existingCourse) {
            return NextResponse.json({
                error: 'A course with this code already exists'
            }, { status: 409 });
        }

        // Get the next sort order
        const maxSortOrder = await prisma.trainingCourse.aggregate({
            where: { organizationId: ctx.organizationId },
            _max: { sortOrder: true },
        });

        // A course written here belongs to this farm. EcoFusion's own are
        // authored from the staff console, and arrive by being loaded in.
        const course = await prisma.trainingCourse.create({
            data: {
                organizationId: ctx.organizationId,
                code,
                title,
                description,
                category,
                duration,
                isRequired: isRequired || false,
                renewalDays: renewalDays || null,
                passScore: passScore || 80,
                sortOrder: (maxSortOrder._max.sortOrder || 0) + 1,
            },
            include: {
                lessons: true,
                _count: {
                    select: {
                        assignments: true,
                        completions: true,
                    },
                },
            },
        });

        return NextResponse.json(course);
    } catch (error) {
        console.error('Failed to create training course:', error);
        return NextResponse.json({ error: 'Failed to create training course' }, { status: 500 });
    }
}
