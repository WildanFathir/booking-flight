"use server";

import prisma from "../../../../../../lib/prisma";

export async function getAirplanes() {
  try {
    const planes = await prisma.airplane.findMany({});

    return planes;
  } catch (error) {
    console.log("DataBase Error :", error);
    return [];
  }
}
