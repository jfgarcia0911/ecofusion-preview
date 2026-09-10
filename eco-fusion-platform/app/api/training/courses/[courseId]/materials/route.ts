import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { visibleToOrganization } from '@/lib/training';

// GET - What a course hands its learners besides the lessons.
//
// The list carries titles only; ?id= returns one material with its content.
// A course can hold twenty long handouts, and a page that only needs their
// names should not have to download all of them to show a list.
//
// Scoped like the course itself: a material in a course this business does
// not hold reads as absent, whatever id is asked for.
export async function GET(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const { courseId } = await params;
        const course = await prisma.trainingCourse.findFirst({
            where: { id: courseId, ...visibleToOrganization(ctx.organizationId) },
            select: { id: true },
        });
        if (!course) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        const id = new URL(request.url).searchParams.get('id');
        if (id) {
            const material = await prisma.courseMaterial.findFirst({
                where: { id, courseId },
                select: { id: true, kind: true, title: true, content: true },
            });
            if (!material) {
                return NextResponse.json({ error: 'Material not found' }, { status: 404 });
            }
            return NextResponse.json(material);
        }

        const materials = await prisma.courseMaterial.findMany({
            where: { courseId },
            select: { id: true, kind: true, title: true },
            orderBy: [{ sortOrder: 'asc' }, { title: 'asc' }],
        });
        return NextResponse.json({ materials });
    } catch (error) {
        console.error('Failed to read course materials:', error);
        return NextResponse.json({ error: 'Failed to read course materials' }, { status: 500 });
    }
}
