import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function DeleteButtonForm() {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" disabled={pending} type="submit" variant="destructive">
      {pending ? (
        <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Trash className="mr-2 h-4 w-4" />
      )}
      {pending ? "Loading..." : "Hapus"}
    </Button>
  );
}
