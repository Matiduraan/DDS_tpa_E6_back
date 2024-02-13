import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllIncidents() {
  try {
    return await prisma.incidente.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
}
