-- Last sign-in per person, read by the Employees directory. The log gains a
-- row for every change anybody makes in a business, so without this the
-- lookup would scan a business's whole history to find its few sign-ins.
-- CreateIndex
CREATE INDEX "ActivityLog_organizationId_action_userId_createdAt_idx" ON "ActivityLog"("organizationId", "action", "userId", "createdAt");

