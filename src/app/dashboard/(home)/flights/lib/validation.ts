import { z } from "zod";

export const formFlightSchema = z.object({
  planeId: z.string({ required_error: "Pilih salah satu pesawat" }),
  price: z.string({ required_error: "Harga Tiket harus diisi" }),
  departureCity: z.string({
    required_error: "Kota keberangkatan tidak boleh kosong",
  }),
  departureDate: z.date(),
  departureCityCode: z
    .string({ required_error: "Kode kota keberangkatan tidak boleh kosong" })
    .min(3, {
      message:
        "Kode kota keberangkatan harus memiliki panjang minimal 3 karakter",
    })
    .max(3, {
      message:
        "Kode kota keberangkatan harus memiliki panjang maksimal 3 karakter",
    }),
  destinationCity: z.string({
    required_error: "Kota tujuan tidak boleh kodong",
  }),
  arrivalDate: z.date(),
  destinationCityCode: z
    .string({ required_error: "Kode kota tujuan tidak boleh kosong" })
    .min(3, {
      message: "Kode kota tujuan harus memiliki panjang minimal 3 karakter",
    })
    .max(3, {
      message: "Kode kota tujuan harus memiliki panjang maksimal 3 karakter",
    }),
});
