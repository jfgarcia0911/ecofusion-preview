import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET - Whether the app can reach its database. For uptime checks: a page
// render said the app was up while the database was down.
export async function GET() {
    const started = Date.now();
    try {
        await prisma.$queryRaw`SELECT 1`;
        return NextResponse.json(
            { status: 'ok', database: 'ok', ms: Date.now() - started },
            { headers: { 'Cache-Control': 'no-store' } }
        );
    } catch (error) {
        console.error('Health check: database unreachable:', error);
        return NextResponse.json(
            { status: 'degraded', database: 'unreachable' },
            { status: 503, headers: { 'Cache-Control': 'no-store' } }
        );
    }
}
