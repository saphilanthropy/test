import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = { title: "Thank You for Your Donation | MATW Project" };

export default function DonateSuccess() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-[#093686]">Thank you for your donation</h1>
        <p className="mt-4 text-[#78716C]">
          Your generosity is changing lives, insha'Allah. A receipt has been sent to your email by
          Stripe. May Allah accept your sadaqah and reward you abundantly.
        </p>
        <a href="/" className="btn-matw mt-8 h-11 px-6">Back to Home</a>
      </main>
      <Footer />
    </div>
  );
}
