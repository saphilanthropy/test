import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = { title: "Donation Cancelled | MATW Project" };

export default function DonateCancel() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#093686]">Your donation was cancelled</h1>
        <p className="mt-4 text-[#78716C]">
          No payment was taken. If you changed your mind, you can start again any time — every
          contribution helps families in need.
        </p>
        <a href="/" className="btn-matw mt-8 h-11 px-6">Back to Home</a>
      </main>
      <Footer />
    </div>
  );
}
