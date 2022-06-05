import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  await prisma.branch.create({
    data: {
      area: body.area,
      coordinator: body.coordinator,
    },
  });
  return {
    sucess: true,
    message: "Berhasil Membuat Cabang",
    body,
  };
});
