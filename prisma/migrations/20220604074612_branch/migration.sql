-- CreateTable
CREATE TABLE "branch" (
    "id" SERIAL NOT NULL,
    "area" TEXT,
    "coordinator" TEXT,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);
