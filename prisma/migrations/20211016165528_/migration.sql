-- AlterTable
ALTER TABLE "ParticularsEducaton" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ParticularsPersonal" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
