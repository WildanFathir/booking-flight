"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import React from "react";
import SubmitButtonForm from "../../components/submit-form-button";
import type { Airplane, Flight } from "@prisma/client";
import { useFormState } from "react-dom";
import { saveFlight, updateFlight } from "../lib/action";
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { dateFormat } from "@/lib/utils";

interface FormFlightProps {
  airplanes: Airplane[];
  type?: "ADD" | "EDIT";
  defaultValues?: Flight | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormFlight({
  airplanes,
  defaultValues,
  type,
}: FormFlightProps) {
  const updateFlightById = (_state: ActionResult, formData: FormData) =>
    updateFlight(null, defaultValues?.id!!, formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? saveFlight : updateFlightById,
    initialFormState
  );

  console.log(defaultValues);

  return (
    <form action={formAction} className="space-y-6">
      {state?.errorTitle !== null && (
        <div className="my-7 bg-red-500 p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planeId">Pilih Pesawat</Label>
          <Select name="planeId" defaultValue={defaultValues?.planeId}>
            <SelectTrigger id="planeId">
              <SelectValue placeholder="Pilih Pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((value) => (
                <SelectItem key={value.id} value={value.id}>
                  {value.name} - ({value.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga Tiket</Label>
          <Input
            placeholder="Harga Tiket"
            name="price"
            id="price"
            type="number"
            min={0}
            defaultValue={defaultValues?.price}
            required
          />
          <span className="text-[10px] text-gray-900">
            Harga untuk kelas bisnis bertambah Rp 500.000 & kelas First
            bertambah Rp 750.000
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="departureCity">Kota Keberangkatan</Label>
          <Input
            placeholder="Kota Keberangkatan"
            name="departureCity"
            id="departureCity"
            defaultValue={defaultValues?.departureCity}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureDate">Tanggal Keberangkatan</Label>
          <Input
            type="datetime-local"
            className="block"
            placeholder="Tanggal Keberangkatan"
            name="departureDate"
            id="departureDate"
            defaultValue={
              defaultValues?.departureDate
                ? dateFormat(defaultValues.departureDate, "YYYY-MM-DDTHH:MM")
                : ""
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota"
            name="departureCityCode"
            id="departureCityCode"
            defaultValue={defaultValues?.departureCityCode}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCity">Kota Tujuan</Label>
          <Input
            placeholder="Kota Tujuan"
            name="destinationCity"
            id="destinationCity"
            defaultValue={defaultValues?.destinationCity}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrivalDate">Tanggal Tiba</Label>
          <Input
            type="datetime-local"
            className="block"
            placeholder="Tanggal Tiba"
            name="arrivalDate"
            id="arrivalDate"
            defaultValue={
              defaultValues?.arrivalDate
                ? dateFormat(defaultValues.arrivalDate, "YYYY-MM-DDTHH:MM")
                : ""
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kode Kota Tujuan</Label>
          <Input
            placeholder="Kode Kota Tujuan"
            name="destinationCityCode"
            id="destinationCityCode"
            defaultValue={defaultValues?.destinationCityCode}
            required
          />
        </div>
      </div>

      <SubmitButtonForm />
    </form>
  );
}
