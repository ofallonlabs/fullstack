-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MENTEE', 'MENTOR', 'ADMIN', 'REVIEWER');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('READ', 'UNREAD', 'DRAFTED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('NewUser', 'IncompleteUser', 'NewApplication', 'RespondApplication', 'StartMentorship', 'UpdateMentorship');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('SESSION', 'SUBSCRIPTION');

-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('PortfolioReview', 'ProjectReview', 'InterviewPreparation', 'MockInterview', 'ResumeReview', 'AskMeAnything', 'WeeklyMeetings');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'WITHDRAWN', 'DONE');

-- CreateEnum
CREATE TYPE "MentorshipStatus" AS ENUM ('PAID', 'BOOKED', 'COMPLETED', 'QUITTED', 'CANCELED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "MentorshipProgress" AS ENUM ('PHASE1', 'PHASE2', 'PHASE3');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "city" TEXT,
    "country" TEXT,
    "profileCompletionReminderSentAt" TIMESTAMP(3),
    "avatarPath" TEXT,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "content" TEXT NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD',
    "notifier" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "tagline" TEXT,
    "currentJobTitle" TEXT,
    "aboutMe" TEXT,
    "stripeAccountId" TEXT,
    "verifiedStrip" BOOLEAN NOT NULL DEFAULT false,
    "verifiedCalendly" BOOLEAN NOT NULL DEFAULT false,
    "calendlyCode" TEXT,
    "calendlyCred" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentee" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "externalLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeBackground" (
    "id" SERIAL NOT NULL,
    "menteeId" INTEGER NOT NULL,
    "education" JSONB NOT NULL,
    "job" JSONB NOT NULL,
    "skills" JSONB NOT NULL,
    "tools" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenteeBackground_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeGoals" (
    "id" SERIAL NOT NULL,
    "menteeId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "expectations" TEXT,
    "expectedTimeline" TEXT,
    "meetingFrequency" INTEGER NOT NULL,
    "focusHpw" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenteeGoals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorService" (
    "id" SERIAL NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "qualifications" TEXT,
    "productId" TEXT,
    "priceId" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "type" "ServiceType" NOT NULL,
    "category" "ServiceCategory" NOT NULL,
    "calendlyEvent" TEXT,
    "needApproval" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "archivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MentorService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "menteeId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "status" "ServiceType" NOT NULL,
    "requestNote" TEXT,
    "responseMessage" TEXT,
    "checkoutId" TEXT,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "archivedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentorship" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "status" "MentorshipStatus" NOT NULL,
    "progress" "MentorshipProgress",
    "type" TEXT NOT NULL,
    "bookingUrl" TEXT,
    "archived" BOOLEAN NOT NULL,
    "endedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentorship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_userId_key" ON "Notification"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_userId_key" ON "Mentor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_userId_key" ON "Mentee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MenteeBackground_menteeId_key" ON "MenteeBackground"("menteeId");

-- CreateIndex
CREATE UNIQUE INDEX "MenteeGoals_menteeId_key" ON "MenteeGoals"("menteeId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentorship_applicationId_key" ON "Mentorship"("applicationId");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeBackground" ADD CONSTRAINT "MenteeBackground_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeGoals" ADD CONSTRAINT "MenteeGoals_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorService" ADD CONSTRAINT "MentorService_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "MentorService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentorship" ADD CONSTRAINT "Mentorship_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
