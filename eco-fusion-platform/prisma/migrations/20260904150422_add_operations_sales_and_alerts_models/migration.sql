-- CreateTable
CREATE TABLE "ZoneAlertThreshold" (
    "id" TEXT NOT NULL,
    "zoneId" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,
    "minValue" DOUBLE PRECISION,
    "maxValue" DOUBLE PRECISION,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "alertLevel" TEXT NOT NULL DEFAULT 'warning',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ZoneAlertThreshold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FishStock" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "zoneId" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "avgWeight" DOUBLE PRECISION,
    "ageWeeks" INTEGER,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expectedHarvest" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'growing',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FishStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FishGrowthLog" (
    "id" TEXT NOT NULL,
    "fishStockId" TEXT NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avgWeight" DOUBLE PRECISION NOT NULL,
    "mortality" INTEGER NOT NULL DEFAULT 0,
    "feedUsed" DOUBLE PRECISION,
    "notes" TEXT,

    CONSTRAINT "FishGrowthLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantCrop" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "zoneId" TEXT NOT NULL,
    "cropType" TEXT NOT NULL,
    "variety" TEXT,
    "quantity" INTEGER NOT NULL,
    "plantedDate" TIMESTAMP(3) NOT NULL,
    "expectedHarvest" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'growing',
    "location" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlantCrop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantGrowthLog" (
    "id" TEXT NOT NULL,
    "plantCropId" TEXT NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "heightCm" DOUBLE PRECISION,
    "healthScore" INTEGER,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,

    CONSTRAINT "PlantGrowthLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrowthParameter" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "variety" TEXT,
    "seedlingDays" INTEGER,
    "growingDays" INTEGER NOT NULL,
    "harvestWeight" DOUBLE PRECISION,
    "optimalTempMin" DOUBLE PRECISION,
    "optimalTempMax" DOUBLE PRECISION,
    "optimalPh" DOUBLE PRECISION,
    "expectedYield" DOUBLE PRECISION,
    "yieldUnit" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GrowthParameter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Harvest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "harvestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "fishStockId" TEXT,
    "plantCropId" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "quality" TEXT,
    "destination" TEXT NOT NULL DEFAULT 'inventory',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Harvest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "harvestId" TEXT,
    "addedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiryDate" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'available',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "saleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerName" TEXT,
    "customerEmail" TEXT,
    "customerPhone" TEXT,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT,
    "status" TEXT NOT NULL DEFAULT 'completed',
    "notes" TEXT,
    "crmCustomerId" TEXT,
    "crmSynced" BOOLEAN NOT NULL DEFAULT false,
    "crmSyncedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleItem" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "inventoryItemId" TEXT,
    "harvestId" TEXT,
    "productName" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SaleItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntegrationSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "apiKey" TEXT,
    "locationId" TEXT,
    "isEnabled" BOOLEAN NOT NULL DEFAULT false,
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntegrationSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "zoneId" TEXT,
    "type" TEXT NOT NULL DEFAULT 'system',
    "severity" TEXT NOT NULL DEFAULT 'warning',
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "assigneeId" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "resolvedBy" TEXT,
    "resolution" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Camera" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "zoneId" TEXT,
    "connectionType" TEXT NOT NULL DEFAULT 'wired',
    "rtspUrl" TEXT NOT NULL,
    "protocol" TEXT NOT NULL DEFAULT 'rtsp',
    "brand" TEXT,
    "model" TEXT,
    "status" TEXT NOT NULL DEFAULT 'offline',
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "lastOnline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhaseSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "budgetMonthly" DOUBLE PRECISION,
    "targetRevenue" DOUBLE PRECISION,
    "alertsEnabled" BOOLEAN NOT NULL DEFAULT true,
    "notifications" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PhaseSettings_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "phaseId" TEXT;
ALTER TABLE "Task" ADD COLUMN     "assignee" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ZoneAlertThreshold_zoneId_parameter_key" ON "ZoneAlertThreshold"("zoneId", "parameter");

-- CreateIndex
CREATE UNIQUE INDEX "IntegrationSettings_userId_key" ON "IntegrationSettings"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PhaseSettings_userId_phaseId_key" ON "PhaseSettings"("userId", "phaseId");

-- AddForeignKey
ALTER TABLE "ZoneAlertThreshold" ADD CONSTRAINT "ZoneAlertThreshold_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FishStock" ADD CONSTRAINT "FishStock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FishStock" ADD CONSTRAINT "FishStock_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FishGrowthLog" ADD CONSTRAINT "FishGrowthLog_fishStockId_fkey" FOREIGN KEY ("fishStockId") REFERENCES "FishStock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PlantCrop" ADD CONSTRAINT "PlantCrop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PlantCrop" ADD CONSTRAINT "PlantCrop_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PlantGrowthLog" ADD CONSTRAINT "PlantGrowthLog_plantCropId_fkey" FOREIGN KEY ("plantCropId") REFERENCES "PlantCrop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "GrowthParameter" ADD CONSTRAINT "GrowthParameter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_fishStockId_fkey" FOREIGN KEY ("fishStockId") REFERENCES "FishStock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_plantCropId_fkey" FOREIGN KEY ("plantCropId") REFERENCES "PlantCrop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "SalesInventory" ADD CONSTRAINT "SalesInventory_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "SalesInventory" ADD CONSTRAINT "SalesInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Sale" ADD CONSTRAINT "Sale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_inventoryItemId_fkey" FOREIGN KEY ("inventoryItemId") REFERENCES "SalesInventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "IntegrationSettings" ADD CONSTRAINT "IntegrationSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Alert" ADD CONSTRAINT "Alert_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Alert" ADD CONSTRAINT "Alert_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Camera" ADD CONSTRAINT "Camera_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Camera" ADD CONSTRAINT "Camera_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "PhaseSettings" ADD CONSTRAINT "PhaseSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
