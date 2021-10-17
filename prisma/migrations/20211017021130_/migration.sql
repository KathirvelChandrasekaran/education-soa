-- CreateTable
CREATE TABLE "Auth" (
    "emailID" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT E'student',

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
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Department" (
    "dept_id" TEXT NOT NULL,
    "dept_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("dept_id")
);

-- CreateTable
CREATE TABLE "ParticularsPersonal" (
    "email" VARCHAR(255) NOT NULL,
    "particulars_id" TEXT NOT NULL,
    "degree" VARCHAR(255),
    "roll_number" VARCHAR(255),
    "photo_url" TEXT,
    "branch" VARCHAR(255),
    "date_joined" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "study_from" INTEGER,
    "study_to" INTEGER,
    "religion" VARCHAR(255),
    "community" VARCHAR(255),
    "parent_name" VARCHAR(255),
    "annual_income" BIGINT,
    "address" TEXT,
    "phone" BIGINT,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ParticularsPersonal_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "ParticularsEducaton" (
    "email" VARCHAR(255) NOT NULL,
    "sslc" VARCHAR(255),
    "sslc_yop" INTEGER,
    "sslc_name" VARCHAR(255),
    "sslc_percent" INTEGER,
    "hsc" VARCHAR(255),
    "hsc_yop" INTEGER,
    "hsc_name" VARCHAR(255),
    "hsc_percent" INTEGER,
    "ug" VARCHAR(255),
    "ug_yop" INTEGER,
    "ug_name" VARCHAR(255),
    "ug_percent" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ParticularsEducaton_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "ParticularsAcademic" (
    "email" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "project" VARCHAR(255),
    "team_members" VARCHAR(255),
    "org_name" VARCHAR(255),
    "guide_name" VARCHAR(255),
    "cgpa" INTEGER,
    "overall_rank" INTEGER,
    "placed_organization" VARCHAR(255),
    "placed_organization_address" VARCHAR(255),

    CONSTRAINT "ParticularsAcademic_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Sem1" (
    "email" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,
    "tutor_name" VARCHAR(255),
    "arrear_count" INTEGER DEFAULT 0,
    "redo_count" INTEGER DEFAULT 0,
    "cgpa" INTEGER DEFAULT 0,

    CONSTRAINT "Sem1_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Sem2" (
    "email" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,
    "tutor_name" VARCHAR(255),
    "arrear_count" INTEGER DEFAULT 0,
    "redo_count" INTEGER DEFAULT 0,
    "cgpa" INTEGER DEFAULT 0,

    CONSTRAINT "Sem2_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Sem3" (
    "email" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,
    "tutor_name" VARCHAR(255),
    "arrear_count" INTEGER DEFAULT 0,
    "redo_count" INTEGER DEFAULT 0,
    "cgpa" INTEGER DEFAULT 0,

    CONSTRAINT "Sem3_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Sem4" (
    "email" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,
    "tutor_name" VARCHAR(255),
    "arrear_count" INTEGER DEFAULT 0,
    "redo_count" INTEGER DEFAULT 0,
    "cgpa" INTEGER DEFAULT 0,

    CONSTRAINT "Sem4_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Sem5" (
    "email" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,
    "tutor_name" VARCHAR(255),
    "arrear_count" INTEGER DEFAULT 0,
    "redo_count" INTEGER DEFAULT 0,
    "cgpa" INTEGER DEFAULT 0,

    CONSTRAINT "Sem5_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Sem6" (
    "email" VARCHAR(255) NOT NULL,
    "isDayScholar" BOOLEAN NOT NULL DEFAULT true,
    "tutor_name" VARCHAR(255),
    "arrear_count" INTEGER DEFAULT 0,
    "redo_count" INTEGER DEFAULT 0,
    "cgpa" INTEGER DEFAULT 0,

    CONSTRAINT "Sem6_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Department"("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsPersonal"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticularsPersonal" ADD CONSTRAINT "ParticularsPersonal_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsEducaton"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticularsEducaton" ADD CONSTRAINT "ParticularsEducaton_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsAcademic"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
