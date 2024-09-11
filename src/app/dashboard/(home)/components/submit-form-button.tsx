import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButtonForm() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="w-full flex items-center justify-center"
      type="submit"
    >
      {pending ? (
        <div className="flex items-center">
          <Loader className="animate-spin h-5 w-5 mr-2" /> Submit
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
