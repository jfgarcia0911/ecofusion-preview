-- Shifts and assigned tasks belong to a business.
--
-- They carried none, so "this business's rota" could only be guessed from who
-- the shift was for - and somebody in two businesses had each business's
-- shifts shown to the other. Existing rows take the business their assignee
-- joined first; new rows record it directly.

SET lock_timeout = '10s';

ALTER TABLE "Schedule" ADD COLUMN "organizationId" TEXT;
ALTER TABLE "ScheduledTask" ADD COLUMN "organizationId" TEXT;

UPDATE "Schedule" s SET "organizationId" = (
    SELECT m."organizationId" FROM "Membership" m
    WHERE m."userId" = s."assigneeId" ORDER BY m."createdAt" ASC LIMIT 1
);
UPDATE "ScheduledTask" t SET "organizationId" = (
    SELECT m."organizationId" FROM "Membership" m
    WHERE m."userId" = t."assigneeId" ORDER BY m."createdAt" ASC LIMIT 1
);

CREATE INDEX "Schedule_organizationId_dayOfWeek_idx" ON "Schedule"("organizationId", "dayOfWeek");
CREATE INDEX "Schedule_assigneeId_idx" ON "Schedule"("assigneeId");
CREATE INDEX "ScheduledTask_organizationId_scheduledFor_idx" ON "ScheduledTask"("organizationId", "scheduledFor");
CREATE INDEX "ScheduledTask_assigneeId_idx" ON "ScheduledTask"("assigneeId");

ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ScheduledTask" ADD CONSTRAINT "ScheduledTask_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
