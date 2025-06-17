import { PrismaClient, Prisma, ServiceType, ServiceCategory } from '@/generated/prisma/client';

export { Prisma, ServiceType, ServiceCategory };

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const prisma =
  globalForPrisma.prisma || new PrismaClient()

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma





//import { PrismaClient } from "@/generated/prisma/client";

//const prisma = new PrismaClient();

//const globalForPrisma = global as unknown as { prisma: typeof prisma };
//
//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

//export default prisma;









// import { PrismaClient } from '@prisma/client';
// import { Pool } from '@neondatabase/serverless';

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





