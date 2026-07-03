import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickDonateBar from "../components/QuickDonateBar";
import HeroSlider from "../components/HeroSlider";
import Placeholder from "../components/Placeholder";
import { urgentAppeals, getInvolved } from "../lib/siteData";

function AnnouncementBar() {
  const messages = [
    "Gaza: Rebuild What Was Lost — Learn More",
    "Urgently Provide Food and Water to Gaza — Give Now",
  ];
  return (
    <div className="w-full overflow-hidden bg-[#093484] py-2">
      <div className="animate-marquee">
        {[...messages, ...messages, ...messages, ...messages].map((m, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-white">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function UrgentAppeals() {
  return (
    <section className="w-full py-6">
      <div className="mx-auto md:container">
        <div className="px-4 text-center">
          <p className="text-2xl font-bold text-[#093686] md:text-[34px]">Urgent Appeals</p>
          <p className="mx-auto mt-2 max-w-2xl text-[#78716C]">
            Food, water and shelter are urgently needed by families in Gaza and Sudan right now.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 lg:grid-cols-4">
          {urgentAppeals.map((a) => (
            <div key={a.title} className="flex flex-col bg-white shadow-lg">
              <Placeholder label={a.title} className="h-[200px] w-full md:h-[240px]" />
              <div className="flex flex-1 flex-col px-3 pb-4 pt-2 text-center">
                <p className="flex items-center justify-center text-lg text-[#00a3da] xl:text-xl">{a.title}</p>
                <p className="my-2 max-h-[78px] overflow-hidden text-sm text-stone-500">{a.desc}</p>
                <div className="mt-auto flex justify-center">
                  <a href={a.href} className="btn-matw h-10">{a.cta}</a>
                </div>
                <div className="mt-2 flex justify-center gap-1 text-xs leading-none">
                  <span className="font-semibold text-[#093686]">{a.donors}</span>
                  <span className="text-[#78716C]">Donors have donated</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AliBanatStory() {
  return (
    <>
      {/* Legacy banner */}
      <section className="matw-gradient mx-auto my-6 w-full max-w-6xl rounded-xl px-6 py-10 text-white sm:px-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-[#f60362]">2016</div>
            <p className="mt-2 text-2xl font-semibold">A legacy of compassion, born from one man's vision.</p>
          </div>
          <div>
            <div className="text-[#f60362]">2024</div>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Fast forward eight years, Muslims Around The World (MATW) now serves the ummah on a global scale —
              delivering life-saving aid to over 19 million people across 24 countries.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="w-full px-4 sm:px-20">
        <div className="mx-auto flex flex-col md:container">
          <div className="mt-6 rounded-xl bg-white p-2 text-center lg:p-10">
            <p className="mb-8 font-gotcha text-[34px] text-[#f60362] sm:text-[60px]">
              Ali Banat<span className="text-black">, his Life, his Legacy, his Impact.</span>
            </p>
            <div className="mx-auto aspect-video w-full max-w-4xl border-4 border-[#F60362]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dzL6BLPAFBo"
                title="Gifted with Cancer - Ali Banat with OnePath Network"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="my-8 flex items-center justify-center">
              <a href="/ali-banat" className="btn-matw h-11 px-6">Learn More About Ali Banat</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GetInvolved() {
  return (
    <section className="mx-auto mt-8 px-4 sm:px-10 md:container md:px-20">
      <h2 className="text-center text-2xl font-bold leading-tight text-[#093686] sm:text-3xl md:text-[40px]">
        Get <span className="text-[#f60362]">involved</span> today!
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-center font-montserrat text-[#78716C] md:text-lg">
        Build your legacy with MATW! Create a meaningful impact in this world and the hereafter through voluntary
        work, compassionate donations, and staying connected.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {getInvolved.map((g) => (
          <div key={g.title} className="flex flex-col bg-white shadow-lg">
            <Placeholder label={g.title} className="h-[160px] w-full sm:h-[240px]" />
            <div className="mt-2 flex h-12 items-center justify-center px-2 text-center text-sm text-[#00A3DA] md:text-xl">
              {g.title}
            </div>
            <div className="flex justify-center p-3">
              <a href={g.href} className="btn-matw h-10">{g.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnnouncementBar />
      <QuickDonateBar />
      <HeroSlider />
      <UrgentAppeals />
      <AliBanatStory />
      <GetInvolved />
      <div className="h-12" />
      <Footer />
    </div>
  );
}
