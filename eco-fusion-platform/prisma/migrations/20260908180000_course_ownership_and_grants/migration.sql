-- Give courses an owner, and farms a way to be given one.
--
-- Until now TrainingCourse belonged to nobody, so every farm saw one shared
-- catalogue and any farm's manager could edit or delete a course the rest were
-- working through. organizationId settles ownership: null is EcoFusion's, a
-- value is that farm's own.
--
-- EcoFusion's courses reach a farm through CourseGrant rather than by being
-- copied into it, so a correction lands everywhere at once and no farm can
-- edit what it was given.

-- AlterTable
ALTER TABLE "TrainingCourse" ADD COLUMN     "organizationId" TEXT;

-- The old constraint made a course code unique across the whole platform,
-- which two farms naming their own induction course "SAFETY-101" would trip
-- over. Uniqueness now belongs to the owner. Written to tolerate either shape
-- Prisma may have left behind.
DROP INDEX IF EXISTS "TrainingCourse_code_key";
ALTER TABLE "TrainingCourse" DROP CONSTRAINT IF EXISTS "TrainingCourse_code_key";

-- CreateIndex
CREATE UNIQUE INDEX "TrainingCourse_organizationId_code_key" ON "TrainingCourse"("organizationId", "code");

-- CreateIndex
CREATE INDEX "TrainingCourse_organizationId_idx" ON "TrainingCourse"("organizationId");

-- AddForeignKey
ALTER TABLE "TrainingCourse" ADD CONSTRAINT "TrainingCourse_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "CourseGrant" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "grantedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseGrant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseGrant_courseId_organizationId_key" ON "CourseGrant"("courseId", "organizationId");

-- CreateIndex
CREATE INDEX "CourseGrant_organizationId_idx" ON "CourseGrant"("organizationId");

-- AddForeignKey
ALTER TABLE "CourseGrant" ADD CONSTRAINT "CourseGrant_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "TrainingCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseGrant" ADD CONSTRAINT "CourseGrant_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseGrant" ADD CONSTRAINT "CourseGrant_grantedById_fkey" FOREIGN KEY ("grantedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Every farm currently sees every course. Grant what they already have, so
-- nobody's academy empties on the deploy that introduces this.
INSERT INTO "CourseGrant" ("id", "courseId", "organizationId", "createdAt")
SELECT gen_random_uuid()::text, c."id", o."id", CURRENT_TIMESTAMP
FROM "TrainingCourse" c
CROSS JOIN "Organization" o
ON CONFLICT DO NOTHING;
