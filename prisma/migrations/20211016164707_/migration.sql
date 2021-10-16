/*
  Warnings:

  - The `sslc_percent` column on the `ParticularsEducaton` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hsc_percent` column on the `ParticularsEducaton` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ug_percent` column on the `ParticularsEducaton` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ParticularsEducaton" DROP COLUMN "sslc_percent",
ADD COLUMN     "sslc_percent" INTEGER,
DROP COLUMN "hsc_percent",
ADD COLUMN     "hsc_percent" INTEGER,
DROP COLUMN "ug_percent",
ADD COLUMN     "ug_percent" INTEGER;
