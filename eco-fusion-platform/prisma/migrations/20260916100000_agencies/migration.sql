-- Agencies: the account that subscribes, above its businesses (sub-accounts).
--
-- Until now each business was EcoFusion's customer directly: its own trial,
-- its own subscription. From here the customer is an agency, modelled on a
-- HighLevel agency. It holds the plan, the trial and the subscription, and
-- its businesses are covered by it up to the plan's sub-account limit. A farm
-- that signs up on its own is an agency with one sub-account.
--
-- Every existing business becomes its own agency, so nobody's access changes:
-- the agency inherits the business's trial and subscription state exactly,
-- and the business's owner becomes the agency's admin (its "master account").
-- At the time of writing there are five businesses, all on trial, one owner
-- each, so this is one agency per business with nothing to merge.
--
-- The account that was EcoFusion's "master" becomes the EcoFusion admin: the
-- platform level above every agency, the role HighLevel's own team plays.
-- "Master account" now names an agency's admin.

-- CreateTable
CREATE TABLE "Agency" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "plan" TEXT NOT NULL DEFAULT 'starter',
    "subscriptionStatus" TEXT NOT NULL DEFAULT 'trialing',
    "trialEndsAt" TIMESTAMP(3),
    "currentPeriodEnd" TIMESTAMP(3),
    "canceledAt" TIMESTAMP(3),
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgencyMember" (
    "id" TEXT NOT NULL,
    "agencyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "permissions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "grantedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AgencyMember_pkey" PRIMARY KEY ("id")
);

-- AlterTable: added empty, filled below, then required.
ALTER TABLE "Organization" ADD COLUMN "agencyId" TEXT;
ALTER TABLE "Snapshot" ADD COLUMN "agencyId" TEXT;
ALTER TABLE "StaffAccessLog" ADD COLUMN "agencyId" TEXT;

-- One agency per existing business, carrying its billing state over as it is.
INSERT INTO "Agency" (
    "id", "name", "plan", "subscriptionStatus", "trialEndsAt",
    "currentPeriodEnd", "canceledAt", "stripeCustomerId", "stripeSubscriptionId", "createdAt", "updatedAt"
)
SELECT
    'agy_' || o."id",
    o."name",
    -- A business already paying was on the single plan that existed, which
    -- is Pro's place in the new list; everyone else starts on Starter.
    CASE WHEN o."subscriptionStatus" = 'active' THEN 'pro' ELSE 'starter' END,
    o."subscriptionStatus",
    o."trialEndsAt",
    o."currentPeriodEnd",
    o."canceledAt",
    o."stripeCustomerId",
    o."stripeSubscriptionId",
    o."createdAt",
    CURRENT_TIMESTAMP
FROM "Organization" o;

UPDATE "Organization" SET "agencyId" = 'agy_' || "id";

-- Each business's owner becomes its agency's admin. A person belongs to at
-- most one agency; were anybody to own two businesses, the one they have
-- owned longest decides which.
INSERT INTO "AgencyMember" ("id", "agencyId", "userId", "role", "permissions", "createdAt")
SELECT DISTINCT ON (m."userId")
    'agm_' || m."id",
    'agy_' || m."organizationId",
    m."userId",
    'admin',
    ARRAY[]::TEXT[],
    m."createdAt"
FROM "Membership" m
WHERE m."role" = 'owner'
ORDER BY m."userId", m."createdAt" ASC;

-- Existing trail lines belong to the agency of the business they name.
UPDATE "StaffAccessLog" l
SET "agencyId" = o."agencyId"
FROM "Organization" o
WHERE l."organizationId" = o."id";

-- The old master account is now the EcoFusion admin.
UPDATE "User" SET "role" = 'platform_admin' WHERE "role" IN ('master', 'platform_owner');

ALTER TABLE "Organization" ALTER COLUMN "agencyId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Agency_stripeCustomerId_key" ON "Agency"("stripeCustomerId");
CREATE UNIQUE INDEX "Agency_stripeSubscriptionId_key" ON "Agency"("stripeSubscriptionId");
CREATE UNIQUE INDEX "AgencyMember_userId_key" ON "AgencyMember"("userId");
CREATE INDEX "AgencyMember_agencyId_idx" ON "AgencyMember"("agencyId");
CREATE INDEX "Organization_agencyId_idx" ON "Organization"("agencyId");
CREATE INDEX "Snapshot_agencyId_idx" ON "Snapshot"("agencyId");
CREATE INDEX "StaffAccessLog_agencyId_createdAt_idx" ON "StaffAccessLog"("agencyId", "createdAt");

-- AddForeignKey
ALTER TABLE "AgencyMember" ADD CONSTRAINT "AgencyMember_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AgencyMember" ADD CONSTRAINT "AgencyMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AgencyMember" ADD CONSTRAINT "AgencyMember_grantedById_fkey" FOREIGN KEY ("grantedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Snapshot" ADD CONSTRAINT "Snapshot_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "StaffAccessLog" ADD CONSTRAINT "StaffAccessLog_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- New tables arrive with row-level security off, which on Supabase exposes
-- them to the public REST API. See 20260910120000_enable_row_level_security.
ALTER TABLE "Agency" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AgencyMember" ENABLE ROW LEVEL SECURITY;
