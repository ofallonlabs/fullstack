/*
  Warnings:

  - You are about to drop the column `externalURL` on the `Mentee` table. All the data in the column will be lost.
  - You are about to drop the column `externalURL` on the `Mentor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mentee" DROP COLUMN "externalURL";

-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "externalURL";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "externalURL" TEXT;
