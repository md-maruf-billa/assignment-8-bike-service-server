/*
  Warnings:

  - Made the column `bikeBikeId` on table `Service` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_bikeBikeId_fkey";

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "completionDate" DROP NOT NULL,
ALTER COLUMN "bikeBikeId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_bikeBikeId_fkey" FOREIGN KEY ("bikeBikeId") REFERENCES "bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
