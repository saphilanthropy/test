// Central place to react to a completed/paid donation. Right now it logs a
// structured record to the server console (visible in your host's logs, e.g.
// Vercel → Logs). Swap the body for whatever you need:
//   - persist to a database (Postgres, Supabase, Airtable…)
//   - send a custom receipt / thank-you email
//   - push into a CRM (e.g. the donor-care system MATW uses)
//
// Kept side-effect-only and defensive so a failure here never 500s the webhook
// (Stripe would otherwise keep retrying).
export async function recordDonation(record) {
  try {
    console.log("[donation]", JSON.stringify(record));
    // TODO: await saveToDatabase(record)
    // TODO: await sendReceiptEmail(record.email, record)
  } catch (err) {
    console.error("[donation] recordDonation failed:", err?.message);
  }
}
