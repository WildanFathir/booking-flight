"use client";

import { deleteFlight } from "../lib/action";

import React, { type FC } from "react";
import DeleteButtonForm from "../../components/delete-form-button";

interface DeleteFlightProps {
  id: string;
}

const DeleteFlight: FC<DeleteFlightProps> = ({ id }) => {
  const DeleteFlightById = deleteFlight.bind(null, id);

  return (
    <form action={DeleteFlightById}>
      <DeleteButtonForm />
    </form>
  );
};

export default DeleteFlight;
