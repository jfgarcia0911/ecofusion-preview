-- End sessions when a password changes.
--
-- Sessions are signed tokens that lasted 30 days whatever happened to the
-- account: an owner resetting a compromised employee's password left the
-- attacker signed in. Each token now carries this number and stops working
-- once it is out of date.

ALTER TABLE "User" ADD COLUMN "sessionVersion" INTEGER NOT NULL DEFAULT 0;
