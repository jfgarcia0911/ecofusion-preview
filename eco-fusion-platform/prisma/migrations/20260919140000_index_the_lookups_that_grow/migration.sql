-- Indexes for the lookups that grow with use: sales by business and date, open
-- alerts, unread notifications, growth logs, assignments and completions by
-- person, and every foreign key a delete or join walks. Postgres does not
-- index foreign keys by itself.


-- CreateIndex
CREATE INDEX IF NOT EXISTS "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Alert_organizationId_status_createdAt_idx" ON "Alert"("organizationId", "status", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Alert_zoneId_idx" ON "Alert"("zoneId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Alert_assigneeId_idx" ON "Alert"("assigneeId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Camera_zoneId_idx" ON "Camera"("zoneId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "CourseAssignment_assigneeId_idx" ON "CourseAssignment"("assigneeId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "CourseCompletion_userId_idx" ON "CourseCompletion"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "CourseGrant_purchaseId_idx" ON "CourseGrant"("purchaseId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FishGrowthLog_fishStockId_recordedAt_idx" ON "FishGrowthLog"("fishStockId", "recordedAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "FishStock_zoneId_idx" ON "FishStock"("zoneId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "IntegrationSettings_organizationId_idx" ON "IntegrationSettings"("organizationId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "LessonCompletion_userId_idx" ON "LessonCompletion"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Notification_userId_read_createdAt_idx" ON "Notification"("userId", "read", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "PlantCrop_zoneId_idx" ON "PlantCrop"("zoneId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "PlantGrowthLog_plantCropId_recordedAt_idx" ON "PlantGrowthLog"("plantCropId", "recordedAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Sale_organizationId_saleDate_idx" ON "Sale"("organizationId", "saleDate");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "SaleItem_harvestId_idx" ON "SaleItem"("harvestId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "SaleItem_inventoryItemId_idx" ON "SaleItem"("inventoryItemId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "SalesInventory_harvestId_idx" ON "SalesInventory"("harvestId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Task_organizationId_phaseId_idx" ON "Task"("organizationId", "phaseId");

