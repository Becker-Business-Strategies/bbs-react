// src/hooks/useContactSubmit.ts
import { useCallback, useState } from "react";
import type { ContactFormValues } from "../schemas/contact";

type Status = "idle" | "submitting" | "success" | "error";

export function useContactSubmit(endpoint = "/api/contact") {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (values: ContactFormValues): Promise<boolean> => {
      setError(null);
      setStatus("submitting");

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          // optionally read body for more detail
          setStatus("error");
          setError("Something went wrong. Please try again.");
          return false;
        }

        setStatus("success");
        return true;
      } catch (err) {
        console.error(err);
        setStatus("error");
        setError("Something went wrong. Please try again.");
        return false;
      }
    },
    [endpoint]
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return {
    submit,
    status,
    error,
    reset,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
    isError: status === "error",
  };
}
