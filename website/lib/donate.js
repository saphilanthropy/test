// Client helper: asks our API to create a Stripe Checkout Session, then sends
// the donor to Stripe's hosted payment page.
export async function startCheckout({ amount, program, frequency = "one_time" } = {}) {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, program, frequency }),
    });
    const data = await res.json();
    if (res.ok && data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Sorry, we couldn't start the donation. Please try again.");
    }
  } catch {
    alert("Network error starting the donation. Please try again.");
  }
}
