import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY
);

export const uploadFile = async (file: File) => {
  try {
    const filename = `${Date.now()}.png`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`public/airplanes/${filename}.png`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Error uploading file: ", error);

    return { error };
  }
};
