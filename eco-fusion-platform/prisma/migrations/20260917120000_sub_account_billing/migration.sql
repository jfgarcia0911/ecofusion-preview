-- Sub-accounts pay their agency, as in HighLevel's SaaS mode.
--
-- The agency pays EcoFusion for its plan. Each business it runs pays the
-- agency $99 a month after a 30-day trial, on the agency's own Stripe account
-- (Stripe Connect). The agency's own business, owned by its master account,
-- pays nothing: the plan already covers it.

ALTER TABLE "Agency"
    ADD COLUMN "stripeAccountId" TEXT,
    ADD COLUMN "stripeChargesEnabled" BOOLEAN NOT NULL DEFAULT false;

CREATE UNIQUE INDEX "Agency_stripeAccountId_key" ON "Agency"("stripeAccountId");

ALTER TABLE "Organization"
    ADD COLUMN "clientBillingExempt" BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN "clientStatus" TEXT NOT NULL DEFAULT 'trialing',
    ADD COLUMN "clientTrialEndsAt" TIMESTAMP(3),
    ADD COLUMN "clientPeriodEnd" TIMESTAMP(3),
    ADD COLUMN "clientCanceledAt" TIMESTAMP(3),
    ADD COLUMN "clientCustomerId" TEXT,
    ADD COLUMN "clientSubscriptionId" TEXT;

CREATE UNIQUE INDEX "Organization_clientSubscriptionId_key" ON "Organization"("clientSubscriptionId");

-- Every business that exists today starts its 30 days now, rather than from
-- when it was created, so nobody is shut out the moment this ships.
UPDATE "Organization" SET "clientTrialEndsAt" = CURRENT_TIMESTAMP + INTERVAL '30 days';

-- A business owned by its own agency's master account is the agency's own.
UPDATE "Organization" o
SET "clientBillingExempt" = true
WHERE EXISTS (
    SELECT 1
    FROM "Membership" m
    JOIN "AgencyMember" a ON a."userId" = m."userId"
    WHERE m."organizationId" = o."id"
      AND m."role" = 'owner'
      AND a."role" = 'admin'
      AND a."agencyId" = o."agencyId"
);
