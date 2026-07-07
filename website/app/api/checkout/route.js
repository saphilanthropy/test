import Stripe from "stripe";

// Runs on the Node.js runtime (the Stripe SDK needs it).
export const runtime = "nodejs";

export async function POST(req) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return Response.json(
      {
        error:
          "Stripe is not configured. Set STRIPE_SECRET_KEY in .env.local (see .env.example).",
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secret);

  let body;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const {
    amount, // dollars (number or numeric string); optional for one-time
    currency = "usd",
    program = "Most Needed Now",
    frequency = "one_time", // "one_time" | "monthly"
  } = body;

  const dollars = amount != null && amount !== "" ? Number(amount) : null;
  const amountCents =
    dollars != null && !Number.isNaN(dollars) ? Math.round(dollars * 100) : null;

  if (amountCents != null && amountCents < 100) {
    return Response.json(
      { error: "Minimum donation is $1.00." },
      { status: 400 }
    );
  }

  const origin = new URL(req.url).origin;
  const success_url = `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${origin}/donate/cancel`;

  try {
    let session;

    if (frequency === "monthly") {
      // Recurring donations require a fixed amount.
      if (!amountCents) {
        return Response.json(
          { error: "Please choose an amount for a monthly donation." },
          { status: 400 }
        );
      }
      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [
          {
            price_data: {
              currency,
              product_data: { name: `Monthly Donation — ${program}` },
              unit_amount: amountCents,
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
        ],
        success_url,
        cancel_url,
        metadata: { program, frequency },
      });
    } else {
      // One-time. If no amount was given, let the donor set it on Stripe's page.
      const price_data = {
        currency,
        product_data: { name: `Donation — ${program}` },
        ...(amountCents
          ? { unit_amount: amountCents }
          : { custom_unit_amount: { enabled: true, minimum: 100 } }),
      };
      session = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "donate",
        line_items: [{ price_data, quantity: 1 }],
        success_url,
        cancel_url,
        metadata: { program, frequency },
      });
    }

    return Response.json({ url: session.url });
  } catch (err) {
    return Response.json(
      { error: err?.message || "Could not start checkout." },
      { status: 500 }
    );
  }
}
