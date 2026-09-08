-- A configured farm, captured so others can be started from it.
--
-- Holds configuration only: business units, zones and their thresholds,
-- growing parameters, and which classes the farm carries. Never anything that
-- happened on the farm - no stock, sales, readings or training records.
--
-- Both foreign keys are SET NULL rather than CASCADE. A snapshot outlives the
-- farm it was taken from and the staff account that took it; losing either
-- should cost the provenance, not the template.

-- CreateTable
CREATE TABLE "Snapshot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "version" INTEGER NOT NULL DEFAULT 1,
    "payload" JSONB NOT NULL,
    "capturedFromId" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Snapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Snapshot_isDefault_idx" ON "Snapshot"("isDefault");

-- AddForeignKey
ALTER TABLE "Snapshot" ADD CONSTRAINT "Snapshot_capturedFromId_fkey" FOREIGN KEY ("capturedFromId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Snapshot" ADD CONSTRAINT "Snapshot_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
