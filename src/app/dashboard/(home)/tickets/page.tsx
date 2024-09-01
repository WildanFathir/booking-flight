import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns-ticket";
import { getTickets } from "./lib/data";

import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Tickets",
};

export default async function TicketsPage() {
  const tickets = await getTickets();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tickets</div>
      </div>
      <DataTable columns={columns} data={tickets} />
    </>
  );
}
