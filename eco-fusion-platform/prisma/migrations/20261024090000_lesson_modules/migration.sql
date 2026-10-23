-- The module a lesson sits in, so a course taught in modules can be shown as
-- groups of lessons. Nullable: every existing course stays one list.

-- AlterTable
ALTER TABLE "TrainingLesson" ADD COLUMN IF NOT EXISTS "module" TEXT;
