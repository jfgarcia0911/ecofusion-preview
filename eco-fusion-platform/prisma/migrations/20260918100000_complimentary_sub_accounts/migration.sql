-- Complimentary sub-accounts.
--
-- An agency's master account may choose not to charge a business it runs: a
-- partner, a demo, a customer it looks after for free. Such a business is never
-- asked for the $99 a month and never locked for not paying it. Every business
-- that exists today goes on being charged as before.

ALTER TABLE "Organization"
    ADD COLUMN "clientComplimentary" BOOLEAN NOT NULL DEFAULT false;
