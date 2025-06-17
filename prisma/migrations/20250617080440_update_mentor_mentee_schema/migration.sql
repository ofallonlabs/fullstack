/*
  Warnings:

  - You are about to drop the column `externalLink` on the `Mentee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mentee" DROP COLUMN "externalLink",
ADD COLUMN     "externalURL" TEXT;

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "bookingURL" TEXT,
ADD COLUMN     "externalURL" TEXT;
