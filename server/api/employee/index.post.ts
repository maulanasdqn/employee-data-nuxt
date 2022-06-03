import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  await prisma.employee.create({
    data: {
      fullname: body.fullname,
      role: body.role,
      present: body.present,
    },
  });
  return {
    sucess: true,
    message: "Berhasil Membuat Karyawan",
    body,
  };
});
