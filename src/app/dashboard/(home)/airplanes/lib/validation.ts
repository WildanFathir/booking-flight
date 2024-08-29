import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const MAX_FILE_SIZE = 200000;

export const airplaneFormSchema = z.object({
  name: z
    .string({ required_error: "Nama Pesawat tidak boleh kosong" })
    .min(4, { message: "Nama Pesawat minimal 4 karakter" }),
  code: z
    .string({ required_error: "Kode Pesawat tidak boleh kosong" })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, "Format kode harus [XXX-111]"),
  image: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Image harus berekstensi jpg, jpeg, atau png"
    )
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      "Ukuran file maksimal 2MB"
    ),
});
