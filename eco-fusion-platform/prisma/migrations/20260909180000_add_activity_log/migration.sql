-- A business's own record of itself: who signed in, and who changed what.
--
-- Separate from StaffAccessLog, which records EcoFusion visiting somebody
-- else's business. The user is nullable and set null on delete, so removing an
-- account does not quietly remove the entries describing what it did.

CREATE TABLE "ActivityLog" (
    "id"             TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "userId"         TEXT,
    "action"         TEXT NOT NULL,
    "method"         TEXT,
    "path"           TEXT,
    "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ActivityLog_organizationId_createdAt_idx" ON "ActivityLog"("organizationId", "createdAt");
CREATE INDEX "ActivityLog_userId_createdAt_idx" ON "ActivityLog"("userId", "createdAt");

ALTER TABLE "ActivityLog"
    ADD CONSTRAINT "ActivityLog_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ActivityLog"
    ADD CONSTRAINT "ActivityLog_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
