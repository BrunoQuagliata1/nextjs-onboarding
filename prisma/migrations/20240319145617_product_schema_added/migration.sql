-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "calification" TEXT,
    "personalize" TEXT[],
    "price" INTEGER NOT NULL,
    "restaurant" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
