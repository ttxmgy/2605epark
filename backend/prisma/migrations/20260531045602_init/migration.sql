-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT,
    "email" TEXT,
    "passwordHash" TEXT NOT NULL,
    "nickname" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'COPILOT',
    "tags" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Park" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ParkHours" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parkId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "venueName" TEXT NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ParkHours_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Poi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parkId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "zone" TEXT,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "tags" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Poi_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PoiLive" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "poiId" TEXT NOT NULL,
    "capturedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "waitMin" INTEGER,
    CONSTRAINT "PoiLive_poiId_fkey" FOREIGN KEY ("poiId") REFERENCES "Poi" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ShowSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "poiId" TEXT NOT NULL,
    "startAt" DATETIME NOT NULL,
    "endAt" DATETIME,
    "status" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ShowSession_poiId_fkey" FOREIGN KEY ("poiId") REFERENCES "Poi" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "parkId" TEXT NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'COPILOT',
    "template" TEXT,
    "data" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Plan_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProgressEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "planId" TEXT,
    "poiId" TEXT,
    "type" TEXT NOT NULL,
    "payload" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProgressEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProgressEvent_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProgressEvent_poiId_fkey" FOREIGN KEY ("poiId") REFERENCES "Poi" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ImportedArtifact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "captureTime" TEXT,
    "rawPath" TEXT,
    "parsed" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ImportedArtifact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserReservation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "category" TEXT,
    "visitDate" TEXT NOT NULL,
    "timeWindow" TEXT,
    "status" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "guestName" TEXT,
    "guestCount" INTEGER,
    "voucherHash" TEXT,
    "voucherLast4" TEXT,
    "sourceImportId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserReservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE INDEX "ParkHours_parkId_date_idx" ON "ParkHours"("parkId", "date");

-- CreateIndex
CREATE INDEX "Poi_parkId_type_idx" ON "Poi"("parkId", "type");

-- CreateIndex
CREATE INDEX "Poi_parkId_zone_idx" ON "Poi"("parkId", "zone");

-- CreateIndex
CREATE UNIQUE INDEX "Poi_parkId_type_name_key" ON "Poi"("parkId", "type", "name");

-- CreateIndex
CREATE INDEX "PoiLive_poiId_capturedAt_idx" ON "PoiLive"("poiId", "capturedAt");

-- CreateIndex
CREATE INDEX "ShowSession_poiId_startAt_idx" ON "ShowSession"("poiId", "startAt");

-- CreateIndex
CREATE INDEX "Plan_userId_createdAt_idx" ON "Plan"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ProgressEvent_userId_createdAt_idx" ON "ProgressEvent"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ProgressEvent_planId_createdAt_idx" ON "ProgressEvent"("planId", "createdAt");

-- CreateIndex
CREATE INDEX "ImportedArtifact_userId_createdAt_idx" ON "ImportedArtifact"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserReservation_voucherHash_key" ON "UserReservation"("voucherHash");

-- CreateIndex
CREATE INDEX "UserReservation_userId_visitDate_idx" ON "UserReservation"("userId", "visitDate");
