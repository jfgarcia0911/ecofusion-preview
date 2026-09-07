-- AlterTable
-- Explicit business-unit assignment for a sale line. Nullable: existing rows
-- keep falling back to product-name keyword matching.
ALTER TABLE "SaleItem" ADD COLUMN     "phaseId" TEXT;

-- CreateIndex
CREATE INDEX "SaleItem_phaseId_idx" ON "SaleItem"("phaseId");

-- CreateIndex
CREATE INDEX "SaleItem_saleId_idx" ON "SaleItem"("saleId");

-- CreateIndex
CREATE INDEX "Sale_userId_saleDate_idx" ON "Sale"("userId", "saleDate");
