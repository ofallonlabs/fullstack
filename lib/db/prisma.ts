import { PrismaClient, Prisma, ServiceType, ServiceCategory, Application, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship, Notification, NotificationStatus, NotificationType } from '@prisma/client';
import { Pool } from '@neondatabase/serverless';

export { Prisma };
export type { Application, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship, Notification, NotificationStatus, NotificationType };
export {ServiceType, ServiceCategory}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

const neonPool = new Pool({
  connectionString: process.env.DIRECT_URL,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 60000,
});

neonPool.on('error', (err: { message: string | string[]; }) => {
  if (err.message.includes('SASL')) {
    console.error('Neon SASL error detected. Resetting connection pool...');
    neonPool.end();
  }
});

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DIRECT_URL,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;










//CORRECT ONE

// import { PrismaClient, Prisma, ServiceType, ServiceCategory, Application, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship, Notification, NotificationStatus, NotificationType } from '@/generated/prisma/client';

// export { Prisma };
// export type { Application, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship, Notification, NotificationStatus, NotificationType };
// export {ServiceType, ServiceCategory}

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// const prisma =
//   globalForPrisma.prisma || new PrismaClient()

// export default prisma;

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma




//WRONG ONE
//import { PrismaClient, Prisma, ServiceType, ServiceCategory, Application, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship } from "@/generated/prisma/client";

// export { Prisma };
// export type { Application, ServiceType, ServiceCategory, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship };

//const prisma = new PrismaClient();

//const globalForPrisma = global as unknown as { prisma: typeof prisma };
//
//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

//export default prisma;









// import { PrismaClient, Prisma, ServiceType, ServiceCategory, Application, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship, Notification, NotificationStatus, NotificationType } from '@prisma/client';
// import { Pool } from '@neondatabase/serverless';

// export { Prisma };
// export type { Application, ServiceType, ServiceCategory, ApplicationStatus, MentorshipStatus, MentorshipProgress, Mentorship, Notification, NotificationStatus, NotificationType };


// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// const neonPool = new Pool({
//   connectionString: process.env.DIRECT_URL,
//   max: 10,
//   idleTimeoutMillis: 5000,
//   connectionTimeoutMillis: 2000,
// });

// neonPool.on('error', (err: { message: string | string[]; }) => {
//   if (err.message.includes('SASL')) {
//     console.error('Neon SASL error detected. Resetting connection pool...');
//     neonPool.end();
//   }
// });

// const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     datasources: {
//       db: {
//         url: process.env.DIRECT_URL,
//       },
//     },
//   });

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// export default prisma;





