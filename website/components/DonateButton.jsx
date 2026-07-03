"use client";

import { useState } from "react";
import { startCheckout } from "../lib/donate";

// A button that kicks off a Stripe Checkout for a given program/amount.
export default function DonateButton({
  program = "Most Needed Now",
  amount,
  frequency = "one_time",
  className = "btn-matw h-10",
  children = "Donate Now",
}) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        await startCheckout({ amount, program, frequency });
        setLoading(false);
      }}
      className={`${className} ${loading ? "opacity-70" : ""}`}
    >
      {loading ? "Redirecting…" : children}
    </button>
  );
}
