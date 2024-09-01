import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/columns-user";
import { getCustomers } from "./lib/data";

import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Users",
};

export default async function UsersPage() {
  const users = await getCustomers();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Users</div>
      </div>
      <DataTable columns={columns} data={users} />
    </>
  );
}
