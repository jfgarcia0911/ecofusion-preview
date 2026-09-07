-- Subscriptions, held by the organization rather than the person.
--
-- Access is granted to a farm. Accounts an owner creates for staff are members
-- of that farm, so when its trial lapses or its subscription is cancelled they
-- lose access along with the owner. There is no per-user entitlement to keep
-- in step.

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "plan" TEXT NOT NULL DEFAULT 'trial';
ALTER TABLE "Organization" ADD COLUMN     "subscriptionStatus" TEXT NOT NULL DEFAULT 'trialing';
ALTER TABLE "Organization" ADD COLUMN     "trialEndsAt" TIMESTAMP(3);
ALTER TABLE "Organization" ADD COLUMN     "currentPeriodEnd" TIMESTAMP(3);
ALTER TABLE "Organization" ADD COLUMN     "canceledAt" TIMESTAMP(3);

-- Organizations that already existed start their 15 days now, so nobody is
-- locked out by the deploy that introduces billing.
UPDATE "Organization"
SET "trialEndsAt" = NOW() + INTERVAL '15 days'
WHERE "trialEndsAt" IS NULL;

-- CreateIndex
CREATE INDEX "Organization_subscriptionStatus_idx" ON "Organization"("subscriptionStatus");
