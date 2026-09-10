-- Courses are now bought rather than loaded.
--
-- Every class a business was carrying is taken away, so that from here on a
-- business holds only what it paid for, took for free, or was given by the
-- master account. The rows are moved, not destroyed: "CourseGrantRetired"
-- keeps exactly what each business held, so the decision can be reversed with
-- one INSERT ... SELECT if it turns out to be the wrong one. Completions and
-- assignments are not touched - somebody who finished a course still did.

CREATE TABLE "CourseGrantRetired" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "grantedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "retiredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseGrantRetired_pkey" PRIMARY KEY ("id")
);

INSERT INTO "CourseGrantRetired" ("id", "courseId", "organizationId", "grantedById", "createdAt")
  SELECT "id", "courseId", "organizationId", "grantedById", "createdAt" FROM "CourseGrant";

-- New tables arrive with row-level security off, which on Supabase exposes
-- them to the public REST API. See 20260910120000_enable_row_level_security.
ALTER TABLE "CourseGrantRetired" ENABLE ROW LEVEL SECURITY;

DELETE FROM "CourseGrant";

-- AlterTable
ALTER TABLE "TrainingCourse" ADD COLUMN     "priceCents" INTEGER;

-- AlterTable
ALTER TABLE "CourseGrant" ADD COLUMN     "purchaseId" TEXT,
ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'gift';

-- CreateTable
CREATE TABLE "CoursePurchase" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "purchasedById" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "amountCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "stripeSessionId" TEXT,
    "stripePaymentIntentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidAt" TIMESTAMP(3),
    "refundedAt" TIMESTAMP(3),

    CONSTRAINT "CoursePurchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursePurchaseItem" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "courseId" TEXT,
    "courseCode" TEXT NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "priceCents" INTEGER NOT NULL,

    CONSTRAINT "CoursePurchaseItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoursePurchase_stripeSessionId_key" ON "CoursePurchase"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "CoursePurchase_stripePaymentIntentId_key" ON "CoursePurchase"("stripePaymentIntentId");

-- CreateIndex
CREATE INDEX "CoursePurchase_organizationId_createdAt_idx" ON "CoursePurchase"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "CoursePurchaseItem_purchaseId_idx" ON "CoursePurchaseItem"("purchaseId");

-- CreateIndex
CREATE INDEX "CoursePurchaseItem_courseId_idx" ON "CoursePurchaseItem"("courseId");

-- AddForeignKey
ALTER TABLE "CourseGrant" ADD CONSTRAINT "CourseGrant_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "CoursePurchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePurchase" ADD CONSTRAINT "CoursePurchase_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePurchase" ADD CONSTRAINT "CoursePurchase_purchasedById_fkey" FOREIGN KEY ("purchasedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePurchaseItem" ADD CONSTRAINT "CoursePurchaseItem_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "CoursePurchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePurchaseItem" ADD CONSTRAINT "CoursePurchaseItem_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "TrainingCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;


-- Purchases hold what a business paid and to whom; nobody outside the app
-- reads them.
ALTER TABLE "CoursePurchase" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CoursePurchaseItem" ENABLE ROW LEVEL SECURITY;
