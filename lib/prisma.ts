import { PrismaClient } from '@prisma/client';

// globalThis - w środowisku Node.js (w którym działa serwer Next.js) jest to globalny obiekt (jak window w przeglądarce).
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Zapewnia tylko jedna instancje klienta Prisma (Singleton)
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
