-- Keep the Access Log when an account is deleted.
--
-- Deleting a staff account used to delete every line it had written, through
-- the cascade on StaffAccessLog.staffUserId. A trail that the person it
-- records can take with them is no trail, so the line now stays and forgets
-- only the link: staffUserId becomes null, and who they were is written onto
-- the line first.
--
-- A trigger rather than the app, so every way an account is deleted keeps the
-- trail, not only the ones that remember to.

ALTER TABLE "StaffAccessLog"
    ADD COLUMN "staffName" TEXT,
    ADD COLUMN "staffEmail" TEXT,
    ADD COLUMN "staffStanding" TEXT;

ALTER TABLE "StaffAccessLog" ALTER COLUMN "staffUserId" DROP NOT NULL;

ALTER TABLE "StaffAccessLog" DROP CONSTRAINT "StaffAccessLog_staffUserId_fkey";
ALTER TABLE "StaffAccessLog" ADD CONSTRAINT "StaffAccessLog_staffUserId_fkey"
    FOREIGN KEY ("staffUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Runs before the row goes, while the account's agency membership (removed by
-- its own cascade afterwards) can still be read to say what they were.
CREATE OR REPLACE FUNCTION "keep_access_log_person"() RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
    UPDATE "StaffAccessLog"
    SET "staffName" = OLD."name",
        "staffEmail" = OLD."email",
        "staffStanding" = CASE
            WHEN OLD."role" IN ('platform_admin', 'master', 'platform_owner') THEN 'EcoFusion admin'
            WHEN OLD."role" = 'platform_staff' THEN 'EcoFusion staff'
            WHEN (SELECT "role" FROM "AgencyMember" WHERE "userId" = OLD."id") = 'admin' THEN 'Master account'
            WHEN EXISTS (SELECT 1 FROM "AgencyMember" WHERE "userId" = OLD."id") THEN 'Agency staff'
            ELSE 'Member'
        END
    WHERE "staffUserId" = OLD."id";
    RETURN OLD;
END;
$$;

CREATE TRIGGER "User_keep_access_log_person"
    BEFORE DELETE ON "User"
    FOR EACH ROW EXECUTE FUNCTION "keep_access_log_person"();
