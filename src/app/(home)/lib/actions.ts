"use server";

import { getUser, lucia } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<{ error: string } | null> {
  const { session } = await getUser();

  if (!session) {
    return {
      error: "You are not logged in",
    };
  }

  await lucia.invalidateUserSessions(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  revalidatePath("/");
  return redirect("/");
}
