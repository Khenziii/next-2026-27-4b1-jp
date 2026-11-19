-- CreateTable
CREATE TABLE "Zadanie" (
    "id" SERIAL NOT NULL,
    "tytul" TEXT NOT NULL,
    "zrobione" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Zadanie_pkey" PRIMARY KEY ("id")
);
