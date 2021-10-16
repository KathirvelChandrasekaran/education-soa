/*
  Warnings:

  - You are about to alter the column `dept_name` on the `Department` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Department" ALTER COLUMN "dept_name" SET DATA TYPE VARCHAR(255);
