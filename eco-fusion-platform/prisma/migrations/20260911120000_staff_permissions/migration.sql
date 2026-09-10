-- AlterTable
ALTER TABLE "User" ADD COLUMN     "staffPermissions" TEXT[] DEFAULT ARRAY[]::TEXT[];


-- Staff taken on before permissions existed start as "Support": open the
-- sub accounts they were given, make changes inside them, manage their
-- people, and read the Access Log. That is what they could do before, less
-- editing and deleting snapshots, which is no longer something every staff
-- account can do. Nobody gains anything by this migration.
UPDATE "User"
SET "staffPermissions" = ARRAY['business.edit', 'business.people', 'log.read']
WHERE "role" = 'platform_staff';
