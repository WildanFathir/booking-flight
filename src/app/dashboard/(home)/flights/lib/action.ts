"use server";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { redirect } from "next/navigation";
import { formFlightSchema } from "./validation";
import prisma from "../../../../../../lib/prisma";
import { generateSeatPerClass } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function saveFlight(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  console.log(formData.get("planeId"));

  const validate = formFlightSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate: new Date(formData.get("departureDate") as string),
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate: new Date(formData.get("arrivalDate") as string),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const data = await prisma.flight.create({
    data: {
      ...validate.data,
      price: Number.parseInt(validate.data.price),
    },
  });

  const seats = generateSeatPerClass(data.id);

  await prisma.flightSeat.createMany({
    data: seats,
  });

  revalidatePath("/dashboard/flights");
  redirect("/dashboard/flights");
}

export async function updateFlight(
  prevState: unknown,
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const validate = formFlightSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate: new Date(formData.get("departureDate") as string),
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate: new Date(formData.get("arrivalDate") as string),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  await prisma.flight.update({
    where: { id: id },
    data: {
      ...validate.data,
      price: Number.parseInt(validate.data.price),
    },
  });

  revalidatePath("/dashboard/flights");
  redirect("/dashboard/flights");
}

export async function deleteFlight(id: string) {
  try {
    await prisma.flightSeat.deleteMany({ where: { flightId: id } });
    await prisma.flight.delete({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/flights");
}
