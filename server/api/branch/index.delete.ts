import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  await prisma.branch.delete({
    where: {
      id: body.id,
    },
  });
  return {
    sucess: true,
    message: "Berhasil Menghapus Cabang",
    body,
  };
});
