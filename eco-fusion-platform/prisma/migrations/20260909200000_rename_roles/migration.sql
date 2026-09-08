-- Separate the two vocabularies that both used the word "admin".
--
-- User.role is standing across the platform: EcoFusion itself, and the support
-- people who enter a customer's business to help. Membership.role is standing
-- inside one business, held by that business's own people. Sharing "admin"
-- between them meant a permission check read the same either way, and granting
-- the wrong one handed a customer the platform.
--
--   User.role       'admin'  ->  'platform_owner'
--   Membership.role 'admin'  ->  'supervisor'
--
-- 'platform_staff' is new and nobody holds it yet; it exists so support can be
-- given entry to a business without also being given EcoFusion's own settings.

-- EcoFusion's own accounts.
UPDATE "User" SET "role" = 'platform_owner' WHERE "role" = 'admin';

-- A customer's senior hand inside one business.
UPDATE "Membership" SET "role" = 'supervisor' WHERE "role" = 'admin';

-- 'manager' on User.role was the old second platform tier and never meant
-- anything on its own; standing now comes from a membership.
UPDATE "User" SET "role" = 'user' WHERE "role" = 'manager';
