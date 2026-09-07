-- Introduce organizations as the unit of tenancy.
--
-- Existing data was scoped to individual users. Every row is adopted into one
-- organization built from its current owner, so nothing changes hands and no
-- row is orphaned. Columns are added nullable, backfilled, then made NOT NULL,
-- so the constraint is never applied to unpopulated data.

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'member',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Membership_userId_organizationId_key" ON "Membership"("userId", "organizationId");
CREATE INDEX "Membership_organizationId_idx" ON "Membership"("organizationId");

-- CreateTable
CREATE TABLE "BusinessUnit" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT 'Layers',
    "color" TEXT NOT NULL DEFAULT 'from-emerald-400 to-emerald-600',
    "accent" TEXT NOT NULL DEFAULT 'text-emerald-400',
    "keywords" TEXT[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "BusinessUnit_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "BusinessUnit_organizationId_key_key" ON "BusinessUnit"("organizationId", "key");
CREATE INDEX "BusinessUnit_organizationId_idx" ON "BusinessUnit"("organizationId");

-- One organization per existing user, so no row changes owner.
INSERT INTO "Organization" ("id", "name", "slug", "createdAt", "updatedAt")
SELECT
    'org_' || u."id",
    COALESCE(NULLIF(u."name", ''), split_part(u."email", '@', 1)) || ' Farm',
    'farm-' || lower(regexp_replace(u."id", '[^a-zA-Z0-9]', '', 'g')),
    NOW(), NOW()
FROM "User" u;

-- Every user owns the organization built from their account.
INSERT INTO "Membership" ("id", "userId", "organizationId", "role", "createdAt", "updatedAt")
SELECT 'mem_' || u."id", u."id", 'org_' || u."id", 'owner', NOW(), NOW()
FROM "User" u;

-- Give every organization EcoFusion's seven silos as its starting point.
INSERT INTO "BusinessUnit" ("id", "organizationId", "key", "title", "description", "icon", "color", "accent", "keywords", "sortOrder", "createdAt", "updatedAt")
SELECT o."id" || '_' || d.key, o."id", d.key, d.title, d.description, d.icon, d.color, d.accent, d.keywords, d.sort, NOW(), NOW()
FROM "Organization" o
CROSS JOIN (VALUES
    ('aquaculture',      '1. Aquaculture',       'Fish production and rearing (Tilapia, Catfish)',     'Fish',          'from-blue-400 to-blue-600',     'text-blue-400',   ARRAY['fish','tilapia','catfish','seafood'], 1),
    ('plant-production', '2. Plant Production',  'Hydroponic vegetation using aquaponic nutrients',     'Leaf',          'from-green-400 to-emerald-600', 'text-green-400',  ARRAY['plants','vegetables','herbs','lettuce','greens','produce'], 2),
    ('methane-gas',      '3. Methane Gas',       'Biodigestion for methane energy production',          'Wind',          'from-gray-400 to-gray-600',     'text-gray-400',   ARRAY['methane','biogas','gas'], 3),
    ('fertilizer',       '4. Bio-Fertilizer',    'Organic fertilizer production from digestive waste',  'Droplets',      'from-amber-600 to-yellow-600',  'text-amber-500',  ARRAY['fertilizer','compost','organic'], 4),
    ('training-center',  '5. Training Center',   'Event space rental and educational programs',         'GraduationCap', 'from-purple-400 to-purple-600', 'text-purple-400', ARRAY['training','event','education','workshop'], 5),
    ('restaurant',       '6. Farm-to-Table',     'On-site restaurant using fresh produce',              'ChefHat',       'from-orange-400 to-red-500',    'text-orange-400', ARRAY['food','meal','restaurant','dining'], 6),
    ('solar-energy',     '7. Solar & Efficiency','Renewable energy and greenhouse temp regulation',     'Sun',           'from-yellow-300 to-orange-400', 'text-yellow-300', ARRAY['solar','power','energy'], 7)
) AS d(key, title, description, icon, color, accent, keywords, sort);

-- AlterTable: add the scoping key nullable, adopt existing rows, then enforce.
ALTER TABLE "Zone"                ADD COLUMN "organizationId" TEXT;
ALTER TABLE "Task"                ADD COLUMN "organizationId" TEXT;
ALTER TABLE "Employee"            ADD COLUMN "organizationId" TEXT;
ALTER TABLE "DashboardData"       ADD COLUMN "organizationId" TEXT;
ALTER TABLE "FishStock"           ADD COLUMN "organizationId" TEXT;
ALTER TABLE "PlantCrop"           ADD COLUMN "organizationId" TEXT;
ALTER TABLE "GrowthParameter"     ADD COLUMN "organizationId" TEXT;
ALTER TABLE "Harvest"             ADD COLUMN "organizationId" TEXT;
ALTER TABLE "SalesInventory"      ADD COLUMN "organizationId" TEXT;
ALTER TABLE "Sale"                ADD COLUMN "organizationId" TEXT;
ALTER TABLE "IntegrationSettings" ADD COLUMN "organizationId" TEXT;
ALTER TABLE "Alert"               ADD COLUMN "organizationId" TEXT;
ALTER TABLE "Camera"              ADD COLUMN "organizationId" TEXT;
ALTER TABLE "PhaseSettings"       ADD COLUMN "organizationId" TEXT;

UPDATE "Zone"                SET "organizationId" = 'org_' || "userId";
UPDATE "Task"                SET "organizationId" = 'org_' || "userId";
UPDATE "Employee"            SET "organizationId" = 'org_' || "userId";
UPDATE "DashboardData"       SET "organizationId" = 'org_' || "userId";
UPDATE "FishStock"           SET "organizationId" = 'org_' || "userId";
UPDATE "PlantCrop"           SET "organizationId" = 'org_' || "userId";
UPDATE "GrowthParameter"     SET "organizationId" = 'org_' || "userId";
UPDATE "Harvest"             SET "organizationId" = 'org_' || "userId";
UPDATE "SalesInventory"      SET "organizationId" = 'org_' || "userId";
UPDATE "Sale"                SET "organizationId" = 'org_' || "userId";
UPDATE "IntegrationSettings" SET "organizationId" = 'org_' || "userId";
UPDATE "Alert"               SET "organizationId" = 'org_' || "userId";
UPDATE "Camera"              SET "organizationId" = 'org_' || "userId";
UPDATE "PhaseSettings"       SET "organizationId" = 'org_' || "userId";

ALTER TABLE "Zone"                ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "Task"                ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "Employee"            ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "DashboardData"       ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "FishStock"           ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "PlantCrop"           ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "GrowthParameter"     ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "Harvest"             ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "SalesInventory"      ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "Sale"                ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "IntegrationSettings" ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "Alert"               ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "Camera"              ALTER COLUMN "organizationId" SET NOT NULL;
ALTER TABLE "PhaseSettings"       ALTER COLUMN "organizationId" SET NOT NULL;

-- Scoping keys that were per-user are now per-organization.
DROP INDEX IF EXISTS "IntegrationSettings_userId_key";
CREATE UNIQUE INDEX "IntegrationSettings_organizationId_key" ON "IntegrationSettings"("organizationId");
DROP INDEX IF EXISTS "PhaseSettings_userId_phaseId_key";
CREATE UNIQUE INDEX "PhaseSettings_organizationId_phaseId_key" ON "PhaseSettings"("organizationId", "phaseId");

-- CreateIndex
CREATE INDEX "Zone_organizationId_idx"            ON "Zone"("organizationId");
CREATE INDEX "Task_organizationId_idx"            ON "Task"("organizationId");
CREATE INDEX "Employee_organizationId_idx"        ON "Employee"("organizationId");
CREATE INDEX "DashboardData_organizationId_idx"   ON "DashboardData"("organizationId");
CREATE INDEX "FishStock_organizationId_idx"       ON "FishStock"("organizationId");
CREATE INDEX "PlantCrop_organizationId_idx"       ON "PlantCrop"("organizationId");
CREATE INDEX "GrowthParameter_organizationId_idx" ON "GrowthParameter"("organizationId");
CREATE INDEX "Harvest_organizationId_idx"         ON "Harvest"("organizationId");
CREATE INDEX "SalesInventory_organizationId_idx"  ON "SalesInventory"("organizationId");
CREATE INDEX "Sale_organizationId_idx"            ON "Sale"("organizationId");
CREATE INDEX "Alert_organizationId_idx"           ON "Alert"("organizationId");
CREATE INDEX "Camera_organizationId_idx"          ON "Camera"("organizationId");
CREATE INDEX "PhaseSettings_organizationId_idx"   ON "PhaseSettings"("organizationId");

-- AddForeignKey
ALTER TABLE "Membership"          ADD CONSTRAINT "Membership_userId_fkey"                  FOREIGN KEY ("userId")         REFERENCES "User"("id")         ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Membership"          ADD CONSTRAINT "Membership_organizationId_fkey"          FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BusinessUnit"        ADD CONSTRAINT "BusinessUnit_organizationId_fkey"        FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Zone"                ADD CONSTRAINT "Zone_organizationId_fkey"                FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Task"                ADD CONSTRAINT "Task_organizationId_fkey"                FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Employee"            ADD CONSTRAINT "Employee_organizationId_fkey"            FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "DashboardData"       ADD CONSTRAINT "DashboardData_organizationId_fkey"       FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FishStock"           ADD CONSTRAINT "FishStock_organizationId_fkey"           FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PlantCrop"           ADD CONSTRAINT "PlantCrop_organizationId_fkey"           FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GrowthParameter"     ADD CONSTRAINT "GrowthParameter_organizationId_fkey"     FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Harvest"             ADD CONSTRAINT "Harvest_organizationId_fkey"             FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SalesInventory"      ADD CONSTRAINT "SalesInventory_organizationId_fkey"      FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Sale"                ADD CONSTRAINT "Sale_organizationId_fkey"                FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "IntegrationSettings" ADD CONSTRAINT "IntegrationSettings_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Alert"               ADD CONSTRAINT "Alert_organizationId_fkey"               FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Camera"              ADD CONSTRAINT "Camera_organizationId_fkey"              FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PhaseSettings"       ADD CONSTRAINT "PhaseSettings_organizationId_fkey"       FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
