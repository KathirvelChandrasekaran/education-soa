-- CreateTable
CREATE TABLE "Auth" (
    "emailID" VARCHAR(255) NOT NULL,
    "passsword" TEXT NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("emailID")
);

-- CreateTable
CREATE TABLE "Student" (
    "email" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
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

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Department"("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE;
