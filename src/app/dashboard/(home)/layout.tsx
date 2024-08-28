import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenText, LogOut, Plane, Ticket, User } from "lucide-react";
import ButtonLogout from "./components/button-logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav className=" border-b border-muted p-5">
            <div className="flex flex-row  items-center justify-between">
              <span className="font-bold text-primary">Flysha Dashboard</span>
            </div>
          </nav>

          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5">
              <div className="space-y-2">
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/"}>Dashboard</Link>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="uppercase text-xs font-bold ">Master Data</div>
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/airplanes"}>
                    <Plane className="mr-2 w-4 h-4" />
                    Airplanes
                  </Link>
                </Button>

                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/flight"}>
                    <BookOpenText className="mr-2 w-4 h-4" />
                    Flights
                  </Link>
                </Button>

                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/tickets"}>
                    <Ticket className="mr-2 w-4 h-4" />
                    Tickets
                  </Link>
                </Button>

                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/users"}>
                    <User className="mr-2 w-4 h-4" />
                    Users
                  </Link>
                </Button>
              </div>

              <ButtonLogout />
            </section>

            <section className="grow mr-5 mt-5 h-[87vh] overflow-y-auto">
              {children}
            </section>
          </section>
        </section>
      </body>
    </html>
  );
}
