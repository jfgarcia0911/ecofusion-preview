-- Everything a course hands its learners besides lessons, and a stable name for
-- each lesson so the importer can find it again.
--
-- A lesson's identity used to be its sortOrder, which meant nothing could be
-- slotted in behind a module without renumbering - and renumbering by delete
-- and re-add would cascade away every learner's completion. sourceKey carries
-- the identity instead, and sortOrder is left free to say only where a lesson
-- sits.

-- AlterTable
ALTER TABLE "TrainingLesson" ADD COLUMN     "sourceKey" TEXT;

-- CreateTable
CREATE TABLE "CourseMaterial" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "sourceKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CourseMaterial_courseId_idx" ON "CourseMaterial"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseMaterial_courseId_sourceKey_key" ON "CourseMaterial"("courseId", "sourceKey");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingLesson_courseId_sourceKey_key" ON "TrainingLesson"("courseId", "sourceKey");

-- AddForeignKey
ALTER TABLE "CourseMaterial" ADD CONSTRAINT "CourseMaterial_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "TrainingCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- New tables arrive with row-level security off, which is how the whole
-- database came to be open through the public REST API. On, with no policies:
-- the anon and authenticated roles see nothing, and the app, which connects as
-- postgres and bypasses RLS, is unaffected.
ALTER TABLE "CourseMaterial" ENABLE ROW LEVEL SECURITY;
