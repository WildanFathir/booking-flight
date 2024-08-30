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
import type { Airplane } from "@prisma/client";

interface FormFlightProps {
  airplanes: Airplane[];
}

export default function FormFlight({ airplanes }: FormFlightProps) {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planeId">Pilih Pesawat</Label>
          <Select name="planeId">
            <SelectTrigger id="planeId">
              <SelectValue placeholder="Pilih Pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((value) => (
                <SelectItem key={value.id} value={value.id}>
                  {value.name} - {value.code}
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
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota"
            name="departureCityCode"
            id="departureCityCode"
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
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kode Kota Tujuan</Label>
          <Input
            placeholder="Kode Kota Tujuan"
            name="destinationCityCode"
            id="destinationCityCode"
            required
          />
        </div>
      </div>

      <SubmitButtonForm />
    </form>
  );
}
