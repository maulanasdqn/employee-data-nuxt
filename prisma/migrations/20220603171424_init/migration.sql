-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "role" TEXT,
    "present" BOOLEAN,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
