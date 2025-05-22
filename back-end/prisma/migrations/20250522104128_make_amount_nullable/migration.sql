/*
  Warnings:

  - You are about to drop the column `amount` on the `category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "amount",
ADD COLUMN     "total" DOUBLE PRECISION;
