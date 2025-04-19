-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'in_progress', 'done');

-- CreateTable
CREATE TABLE "customer" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "bike" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_customerId_key" ON "customer"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "bike_bikeId_key" ON "bike"("bikeId");

-- CreateIndex
CREATE UNIQUE INDEX "Service_serviceId_key" ON "Service"("serviceId");

-- AddForeignKey
ALTER TABLE "bike" ADD CONSTRAINT "bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
