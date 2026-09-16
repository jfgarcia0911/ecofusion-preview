import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

interface CustomerRow {
    customerName: string | null;
    customerEmail: string | null;
    customerPhone: string | null;
    totalSales: number;
    totalSpent: number;
    lastPurchase: Date;
}

// GET - The business's customers, as its sales describe them.
//
// One row per customer - by email, or by name where there is no email - summed
// in the database. The Customers page used to download every sale to do this.
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const rows = await prisma.$queryRaw<CustomerRow[]>`
            SELECT
                MAX("customerName") AS "customerName",
                MAX("customerEmail") AS "customerEmail",
                MAX("customerPhone") AS "customerPhone",
                COUNT(*)::int AS "totalSales",
                COALESCE(SUM("total"), 0)::float8 AS "totalSpent",
                MAX("saleDate") AS "lastPurchase"
            FROM "Sale"
            WHERE "organizationId" = ${ctx.organizationId}
              AND ("customerEmail" IS NOT NULL OR "customerName" IS NOT NULL)
            GROUP BY COALESCE("customerEmail", "customerName")
            ORDER BY MAX("saleDate") DESC
            LIMIT 2000
        `;

        return NextResponse.json(
            rows.map((row) => ({ ...row, customerName: row.customerName || 'Unknown' }))
        );
    } catch (error) {
        console.error('Failed to list customers:', error);
        return NextResponse.json({ error: 'Failed to load customers' }, { status: 500 });
    }
}
