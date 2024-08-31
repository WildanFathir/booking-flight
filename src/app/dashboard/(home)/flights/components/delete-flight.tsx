"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { type FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteFlight } from "../lib/action";

interface DeleteFlightProps {
  id: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" disabled={pending} type="submit" variant="destructive">
      <Trash className="mr-2 h-4 w-4" />
      Hapus
    </Button>
  );
}

const DeleteFlight: FC<DeleteFlightProps> = ({ id }) => {
  const DeleteFlightById = deleteFlight.bind(null, id);

  return (
    <form action={DeleteFlightById}>
      <SubmitButton />
    </form>
  );
};

export default DeleteFlight;
