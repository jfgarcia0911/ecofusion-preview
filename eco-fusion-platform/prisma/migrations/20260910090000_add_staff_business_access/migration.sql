-- Which businesses a member of EcoFusion staff may work in.
--
-- The platform owner reaches every business; staff reach only what they are
-- handed. Nothing is granted by this migration, so the only platform account
-- that exists keeps the reach it already had by being the owner.

CREATE TABLE "StaffBusinessAccess" (
    "id"             TEXT NOT NULL,
    "userId"         TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "grantedById"    TEXT,
    "createdAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StaffBusinessAccess_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "StaffBusinessAccess_userId_organizationId_key"
    ON "StaffBusinessAccess"("userId", "organizationId");
CREATE INDEX "StaffBusinessAccess_organizationId_idx"
    ON "StaffBusinessAccess"("organizationId");

ALTER TABLE "StaffBusinessAccess"
    ADD CONSTRAINT "StaffBusinessAccess_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "StaffBusinessAccess"
    ADD CONSTRAINT "StaffBusinessAccess_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "StaffBusinessAccess"
    ADD CONSTRAINT "StaffBusinessAccess_grantedById_fkey"
    FOREIGN KEY ("grantedById") REFERENCES "User"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
