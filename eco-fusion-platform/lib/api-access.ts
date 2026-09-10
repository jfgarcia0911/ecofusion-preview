/**
 * The subscription check every API route makes before it does anything.
 *
 * Access belongs to the business, and a business that has stopped paying has
 * stopped having access. Until now that was enforced by the page shell alone:
 * loading a screen redirected to billing, but the routes behind those screens
 * answered anybody who asked. A bookmarked address, a tab left open since
 * yesterday, or anything calling the API directly carried on working
 * indefinitely, so the lock was on the door and not on the building.
 *
 * Nothing here deletes or hides data permanently. A lapsed business keeps
 * every record it had; it simply cannot reach them until it subscribes, at
 * which point everything answers again exactly as before.
 */

import { NextResponse } from 'next/server';
import { getOrgContext, type OrgContext } from '@/lib/tenancy';

/**
 * The caller's business, or the answer to send them instead.
 *
 * Used as:
 *
 *   const { ctx, refusal } = await activeOrg();
 *   if (refusal) return refusal;
 *
 * after which `ctx` is a business that is signed in and paid up.
 *
 * The two refusals are deliberately different. 401 says the caller is not
 * signed in, which a client should answer by sending them to sign in. 402
 * says the business has lapsed, which a client should answer by sending them
 * to billing; treating that as an authentication failure would sign somebody
 * out over an unpaid invoice and lose them the session they were about to
 * pay from.
 */
export async function activeOrg(): Promise<
    { ctx: OrgContext; refusal: null } | { ctx: null; refusal: NextResponse }
> {
    const ctx = await getOrgContext();

    if (!ctx) {
        return {
            ctx: null,
            refusal: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
        };
    }

    // Staff are exempt. A business that has lapsed is one of the reasons
    // EcoFusion is called in, and being unable to look at it would make the
    // support session useless precisely when it is needed.
    // A staff member doing something the master account has not allowed them.
    // Asked before anything else about the request, and before the route runs.
    if (ctx.staffRefusal) {
        return { ctx: null, refusal: NextResponse.json({ error: ctx.staffRefusal }, { status: 403 }) };
    }
    if (!ctx.access.allowed && !ctx.isStaff) {
        return {
            ctx: null,
            refusal: NextResponse.json(
                {
                    error: 'This business has no active subscription. Renew it to carry on.',
                    reason: ctx.access.reason,
                },
                { status: 402 }
            ),
        };
    }

    return { ctx, refusal: null };
}
