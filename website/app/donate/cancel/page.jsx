import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getContent } from "../../../lib/content";

const content = getContent("en");
export const metadata = { title: "Donation Cancelled | MATW Project" };

export default function DonateCancel() {
  const t = content.donatePages;
  return (
    <div className="min-h-screen bg-white">
      <Header content={content} locale="en" />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#093686]">{t.cancelTitle}</h1>
        <p className="mt-4 text-[#78716C]">{t.cancelBody}</p>
        <a href="/" className="btn-matw mt-8 h-11 px-6">{t.back}</a>
      </main>
      <Footer content={content} />
    </div>
  );
}
