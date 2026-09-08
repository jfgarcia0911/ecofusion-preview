-- Record EcoFusion staff working inside a customer's farm.
--
-- Staff reach farms they hold no membership in, so the organizationId on every
-- other table cannot account for what they did. Entering a farm is written
-- here, as is each change made while inside one.
--
-- Rows cascade on delete of either side because the log is about a
-- relationship between two records; once the farm or the staff account is
-- gone there is nothing left for the row to describe.

-- CreateTable
CREATE TABLE "StaffAccessLog" (
    "id" TEXT NOT NULL,
    "staffUserId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "method" TEXT,
    "path" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StaffAccessLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StaffAccessLog_organizationId_createdAt_idx" ON "StaffAccessLog"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "StaffAccessLog_staffUserId_createdAt_idx" ON "StaffAccessLog"("staffUserId", "createdAt");

-- AddForeignKey
ALTER TABLE "StaffAccessLog" ADD CONSTRAINT "StaffAccessLog_staffUserId_fkey" FOREIGN KEY ("staffUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffAccessLog" ADD CONSTRAINT "StaffAccessLog_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
