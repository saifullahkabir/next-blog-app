"use client";

import { useEffect } from "react";

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //* we can pass this error to a logger
    console.error(error);
  }, [error]);
  return (
    <div className="container mx-auto my-auto">
      <h1>Something went wrong! Please try again later</h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
