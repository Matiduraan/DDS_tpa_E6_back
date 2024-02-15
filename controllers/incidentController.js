import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllIncidents() {
  try {
    return await prisma.incidente.findMany({
      include: {
        comunidad: true,
        servicio: true,
        usuarioCierre: {
          select: {
            username: true,
            puntosConfianza: true,
            id: true,
          },
        },
        usuarioInformador: {
          select: {
            username: true,
            puntosConfianza: true,
            id: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
