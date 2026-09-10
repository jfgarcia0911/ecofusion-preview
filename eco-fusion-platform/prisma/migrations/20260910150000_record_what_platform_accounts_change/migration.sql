-- A change to the platform itself belongs to no one business.
ALTER TABLE "StaffAccessLog" ALTER COLUMN "organizationId" DROP NOT NULL;

-- What a change said, not only where it was made.
ALTER TABLE "StaffAccessLog" ADD COLUMN "detail" TEXT;
