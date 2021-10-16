-- CreateTable
CREATE TABLE "Auth" (
    "emailID" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT E'admin',

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("emailID")
);

-- CreateTable
CREATE TABLE "Student" (
    "email" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "dob" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "course" VARCHAR(255) NOT NULL,
    "deptId" TEXT NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Department" (
    "dept_id" TEXT NOT NULL,
    "dept_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("dept_id")
);

-- CreateTable
CREATE TABLE "Particulars" (
    "email" VARCHAR(255) NOT NULL,
    "particulars_id" TEXT NOT NULL,
    "degree" VARCHAR(255) NOT NULL,
    "roll_number" VARCHAR(255) NOT NULL,
    "photo_url" TEXT NOT NULL,
    "branch" VARCHAR(255) NOT NULL,
    "date_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "study_from" INTEGER NOT NULL,
    "study_to" INTEGER NOT NULL,
    "religion" VARCHAR(255) NOT NULL,
    "community" VARCHAR(255) NOT NULL,
    "parent_name" VARCHAR(255) NOT NULL,
    "annual_income" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "Particulars_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Department"("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE;
