/*
  Warnings:

  - You are about to drop the column `bode` on the `Posts` table. All the data in the column will be lost.
  - Added the required column `body` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "bode",
ADD COLUMN     "body" TEXT NOT NULL;

ALTER TABLE "Posts" ALTER COLUMN "body" SET DEFAULT '';
