-- AlterTable
ALTER TABLE "CoursePurchaseItem" ADD COLUMN     "packageCategory" TEXT;

-- CreateTable
CREATE TABLE "CoursePackage" (
    "category" TEXT NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoursePackage_pkey" PRIMARY KEY ("category")
);


-- New tables arrive with row-level security off. See
-- 20260910120000_enable_row_level_security.
ALTER TABLE "CoursePackage" ENABLE ROW LEVEL SECURITY;
