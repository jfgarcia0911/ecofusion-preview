-- Join an employee record to the login that person uses.
--
-- Employee.userId already records who entered the row, so the link to an
-- account needs a field of its own. Nullable: an employee may exist in the
-- directory without ever being given access.

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "accountId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_accountId_key" ON "Employee"("accountId");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
