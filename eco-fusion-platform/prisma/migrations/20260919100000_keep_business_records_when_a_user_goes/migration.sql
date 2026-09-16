-- Keep a business's records when the person who entered them is deleted.
--
-- userId on these tables says who typed the row, not who owns it; the business
-- (organizationId) owns it. A cascade on userId meant removing a staff member
-- deleted the sales, harvests, stock, zones and employees they had entered in
-- customers' businesses - and a zone takes its readings and thresholds with it.
-- The link is now cleared instead, and the record stays with its business.
--
-- The same for who assigned a course, who set a shift and who created a task,
-- and for the Access Log, which outlives the business or agency it describes.

SET lock_timeout = '10s';

-- DropForeignKey
ALTER TABLE "Alert" DROP CONSTRAINT "Alert_userId_fkey";

-- DropForeignKey
ALTER TABLE "Camera" DROP CONSTRAINT "Camera_userId_fkey";

-- DropForeignKey
ALTER TABLE "CourseAssignment" DROP CONSTRAINT "CourseAssignment_assignedById_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_userId_fkey";

-- DropForeignKey
ALTER TABLE "FishStock" DROP CONSTRAINT "FishStock_userId_fkey";

-- DropForeignKey
ALTER TABLE "GrowthParameter" DROP CONSTRAINT "GrowthParameter_userId_fkey";

-- DropForeignKey
ALTER TABLE "Harvest" DROP CONSTRAINT "Harvest_userId_fkey";

-- DropForeignKey
ALTER TABLE "IntegrationSettings" DROP CONSTRAINT "IntegrationSettings_userId_fkey";

-- DropForeignKey
ALTER TABLE "PhaseSettings" DROP CONSTRAINT "PhaseSettings_userId_fkey";

-- DropForeignKey
ALTER TABLE "PlantCrop" DROP CONSTRAINT "PlantCrop_userId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_userId_fkey";

-- DropForeignKey
ALTER TABLE "SalesInventory" DROP CONSTRAINT "SalesInventory_userId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_adminId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduledTask" DROP CONSTRAINT "ScheduledTask_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "StaffAccessLog" DROP CONSTRAINT "StaffAccessLog_agencyId_fkey";

-- DropForeignKey
ALTER TABLE "StaffAccessLog" DROP CONSTRAINT "StaffAccessLog_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- DropForeignKey
ALTER TABLE "Zone" DROP CONSTRAINT "Zone_userId_fkey";

-- AlterTable
ALTER TABLE "Alert" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Camera" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CourseAssignment" ALTER COLUMN "assignedById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FishStock" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "GrowthParameter" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Harvest" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "IntegrationSettings" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PhaseSettings" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PlantCrop" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sale" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SalesInventory" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "adminId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ScheduledTask" ALTER COLUMN "creatorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Zone" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduledTask" ADD CONSTRAINT "ScheduledTask_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAssignment" ADD CONSTRAINT "CourseAssignment_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FishStock" ADD CONSTRAINT "FishStock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantCrop" ADD CONSTRAINT "PlantCrop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrowthParameter" ADD CONSTRAINT "GrowthParameter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInventory" ADD CONSTRAINT "SalesInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegrationSettings" ADD CONSTRAINT "IntegrationSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhaseSettings" ADD CONSTRAINT "PhaseSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffAccessLog" ADD CONSTRAINT "StaffAccessLog_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffAccessLog" ADD CONSTRAINT "StaffAccessLog_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

