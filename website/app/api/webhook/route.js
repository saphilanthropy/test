import Stripe from "stripe";
import { recordDonation } from "../../../lib/donations";

// Node runtime + no caching: webhooks must run fresh, server-side.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secret || !webhookSecret) {
    return Response.json(
      {
        error:
          "Webhook not configured. Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET (see .env.example).",
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secret);

  // Signature verification needs the RAW request body, not parsed JSON.
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    // Bad signature / tampered payload / wrong secret.
    return Response.json(
      { error: `Webhook signature verification failed: ${err?.message}` },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      // One-time donations complete here.
      case "checkout.session.completed": {
        const s = event.data.object;
        // Only act once the payment is actually collected.
        if (s.payment_status === "paid" || s.mode === "subscription") {
          await recordDonation({
            type: s.mode === "subscription" ? "monthly" : "one_time",
            stripeSessionId: s.id,
            amount: (s.amount_total ?? 0) / 100,
            currency: s.currency,
            email: s.customer_details?.email ?? null,
            name: s.customer_details?.name ?? null,
            program: s.metadata?.program ?? null,
            customerId: s.customer ?? null,
            subscriptionId: s.subscription ?? null,
          });
        }
        break;
      }

      // Each recurring monthly charge after the first.
      case "invoice.paid": {
        const inv = event.data.object;
        if (inv.billing_reason === "subscription_cycle") {
          await recordDonation({
            type: "monthly_renewal",
            stripeInvoiceId: inv.id,
            amount: (inv.amount_paid ?? 0) / 100,
            currency: inv.currency,
            email: inv.customer_email ?? null,
            customerId: inv.customer ?? null,
            subscriptionId: inv.subscription ?? null,
          });
        }
        break;
      }

      default:
        // Ignore unrelated event types.
        break;
    }
  } catch (err) {
    // Log but still 200 below unless it's fatal — recordDonation is defensive.
    console.error("[webhook] handler error:", err?.message);
  }

  // Acknowledge receipt so Stripe stops retrying.
  return Response.json({ received: true });
}
