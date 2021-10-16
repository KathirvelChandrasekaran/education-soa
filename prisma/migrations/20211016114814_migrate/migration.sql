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

    CONSTRAINT "ParticularsPersonal_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "ParticularsEducaton" (
    "email" VARCHAR(255) NOT NULL,
    "sslc" VARCHAR(255),
    "sslc_yop" INTEGER,
    "sslc_name" VARCHAR(255),
    "sslc_percent" VARCHAR(255),
    "hsc" VARCHAR(255),
    "hsc_yop" INTEGER,
    "hsc_name" VARCHAR(255),
    "hsc_percent" VARCHAR(255),
    "ug" VARCHAR(255),
    "ug_yop" INTEGER,
    "ug_name" VARCHAR(255),
    "ug_percent" VARCHAR(255),

    CONSTRAINT "ParticularsEducaton_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "Department"("dept_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsPersonal"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticularsPersonal" ADD CONSTRAINT "ParticularsPersonal_email_fkey" FOREIGN KEY ("email") REFERENCES "ParticularsEducaton"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
