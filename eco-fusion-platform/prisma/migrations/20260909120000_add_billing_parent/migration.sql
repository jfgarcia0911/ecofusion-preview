-- One subscription covers every business its owner runs.
--
-- A business added by an owner points at the one that pays for it. Existing
-- businesses each bill for themselves, so the column starts null everywhere
-- and nothing about their access changes.

ALTER TABLE "Organization" ADD COLUMN "billingParentId" TEXT;

ALTER TABLE "Organization"
    ADD CONSTRAINT "Organization_billingParentId_fkey"
    FOREIGN KEY ("billingParentId") REFERENCES "Organization"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "Organization_billingParentId_idx" ON "Organization"("billingParentId");
