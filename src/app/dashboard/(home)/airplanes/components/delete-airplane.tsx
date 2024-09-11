"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash } from "lucide-react";
import React, { type FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteAirplane } from "../lib/actions";
import DeleteButtonForm from "../../components/delete-form-button";

interface DeleteAirplaneProps {
  id: string;
}

const DeleteAirplane: FC<DeleteAirplaneProps> = ({ id }) => {
  const DeleteAirplaneById = deleteAirplane.bind(null, id);

  return (
    <form action={DeleteAirplaneById}>
      <DeleteButtonForm />
    </form>
  );
};

export default DeleteAirplane;
