-- Call EcoFusion's own account what it is: the master account.
--
--   User.role   'platform_owner'  ->  'master'
--
-- A plain rename of the stored value; nothing else about the account changes.
-- Its reach, its settings and the businesses it has handed to staff are all
-- keyed on the user, not on this string.
--
-- Session tokens are not touched by a migration and still carry the old value
-- until they are reissued, so lib/roles.ts goes on recognising it for as long
-- as a token might.

UPDATE "User" SET "role" = 'master' WHERE "role" = 'platform_owner';
