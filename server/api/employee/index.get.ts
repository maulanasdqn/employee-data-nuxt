import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const employee = await prisma.employee.findMany();
  return employee;
});
