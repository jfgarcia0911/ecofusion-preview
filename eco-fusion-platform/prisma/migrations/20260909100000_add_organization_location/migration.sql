-- Where a business is, so a list of them can be read at a glance.
-- Optional and free text: it tells two similarly named businesses apart, and
-- nothing routes, bills or reports on it.
ALTER TABLE "Organization" ADD COLUMN "location" TEXT;
