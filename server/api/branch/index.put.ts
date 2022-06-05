import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  await prisma.branch.update({
    where: {
      id: body.id,
    },
    data: {
      area: body.area,
      coordinator: body.coordinator,
    },
  });
  return {
    sucess: true,
    message: "Berhasil Mengubah Cabang",
    body,
  };
});
