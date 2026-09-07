import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { complete } = await request.json();

        await prisma.user.update({
            where: { id: ctx.userId },
            data: { onboardingComplete: complete },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Onboarding update error:', error);
        return NextResponse.json(
            { error: 'Failed to update onboarding status' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: ctx.userId },
            select: { onboardingComplete: true },
        });

        return NextResponse.json({
            onboardingComplete: user?.onboardingComplete ?? false,
        });
    } catch (error) {
        console.error('Onboarding status error:', error);
        return NextResponse.json(
            { error: 'Failed to get onboarding status' },
            { status: 500 }
        );
    }
}
