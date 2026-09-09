-- Shut the public REST API out of every table.
--
-- Supabase exposes the public schema through PostgREST, and the anon role
-- holds select, insert, update and delete on all of it. Row-level security is
-- the only thing standing between that role and the data; it was off, so
-- anyone holding the project's publishable key could read every account, every
-- password hash and every customer's business, and could write to them too.
--
-- Enabling it with no policies denies everything to any role that is subject
-- to RLS, which is anon and authenticated. The application is unaffected: it
-- connects as postgres, which carries rolbypassrls and never evaluates a
-- policy. FORCE is deliberately not used - that would subject the owner to
-- these rules as well, and there are no policies for it to pass.
--
-- New tables arrive with RLS off. Either repeat this for each one, or take
-- away the exposure itself by turning off the Data API in the dashboard.

ALTER TABLE "Account" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ActivityLog" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Alert" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "BusinessUnit" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Camera" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CourseAssignment" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CourseCompletion" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CourseGrant" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "DashboardData" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Employee" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FishGrowthLog" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FishStock" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "GrowthParameter" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Harvest" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "IntegrationSettings" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "LessonCompletion" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Membership" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Notification" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Organization" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PhaseSettings" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PlantCrop" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PlantGrowthLog" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Sale" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "SaleItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "SalesInventory" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Schedule" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ScheduledTask" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "SensorReading" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Session" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Snapshot" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "StaffAccessLog" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "StaffBusinessAccess" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Task" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "TrainingCourse" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "TrainingLesson" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "UserLmsProgress" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "VerificationToken" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Zone" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ZoneAlertThreshold" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;
