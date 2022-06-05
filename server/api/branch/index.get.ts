import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const branch = await prisma.branch.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return branch;
});
