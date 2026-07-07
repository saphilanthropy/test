import Header from "./Header";
import Footer from "./Footer";
import QuickDonateBar from "./QuickDonateBar";
import HeroSlider from "./HeroSlider";
import DonateButton from "./DonateButton";
import LangSetter from "./LangSetter";

function AnnouncementBar({ messages }) {
  return (
    <div className="w-full overflow-hidden bg-[#093484] py-2">
      <div className="animate-marquee">
        {[...messages, ...messages, ...messages, ...messages].map((m, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-white">{m}</span>
        ))}
      </div>
    </div>
  );
}

function UrgentAppeals({ u }) {
  return (
    <section className="w-full py-6">
      <div className="mx-auto md:container">
        <div className="px-4 text-center">
          <p className="text-2xl font-bold text-[#093686] md:text-[34px]">{u.title}</p>
          <p className="mx-auto mt-2 max-w-2xl text-[#78716C]">{u.subtitle}</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 lg:grid-cols-4">
          {u.appeals.map((a) => (
            <div key={a.title} className="flex flex-col bg-white shadow-lg">
              <div className="img-hover-zoom overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} alt={a.title} className="h-[200px] w-full object-cover object-top transition-transform duration-500 hover:scale-105 md:h-[240px]" />
              </div>
              <div className="flex flex-1 flex-col px-3 pb-4 pt-2 text-center">
                <p className="flex items-center justify-center text-lg text-[#00a3da] xl:text-xl">{a.title}</p>
                <p className="my-2 max-h-[78px] overflow-hidden text-sm text-stone-500">{a.desc}</p>
                <div className="mt-auto flex justify-center">
                  <DonateButton program={a.title} frequency="one_time" className="btn-matw h-10">{a.cta}</DonateButton>
                </div>
                <div className="mt-2 flex justify-center gap-1 text-xs leading-none">
                  <span className="font-semibold text-[#093686]">{a.donors}</span>
                  <span className="text-[#78716C]">{u.donorsSuffix}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AliBanatStory({ legacy, video }) {
  return (
    <>
      <section className="matw-gradient mx-auto my-6 w-full max-w-6xl rounded-xl px-6 py-10 text-white sm:px-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-[#f60362]">{legacy.year1}</div>
            <p className="mt-2 text-2xl font-semibold">{legacy.lead1}</p>
          </div>
          <div>
            <div className="text-[#f60362]">{legacy.year2}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/90">{legacy.lead2}</p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-20">
        <div className="mx-auto flex flex-col md:container">
          <div className="mt-6 rounded-xl bg-white p-2 text-center lg:p-10">
            <p className="mb-8 font-gotcha text-[34px] text-[#f60362] sm:text-[60px]">
              {video.lead}<span className="text-black">{video.rest}</span>
            </p>
            <div className="mx-auto aspect-video w-full max-w-4xl border-4 border-[#F60362]">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/dzL6BLPAFBo" title="Ali Banat" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="my-8 flex items-center justify-center">
              <a href="/ali-banat" className="btn-matw h-11 px-6">{video.cta}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GetInvolved({ g }) {
  return (
    <section className="mx-auto mt-8 px-4 sm:px-10 md:container md:px-20">
      <h2 className="text-center text-2xl font-bold leading-tight text-[#093686] sm:text-3xl md:text-[40px]">
        {g.titlePre}<span className="text-[#f60362]">{g.titleHighlight}</span>{g.titlePost}
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-center font-montserrat text-[#78716C] md:text-lg">{g.subtitle}</p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {g.cards.map((c) => (
          <div key={c.title} className="flex flex-col bg-white shadow-lg">
            <div className="max-h-[300px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} className="w-full object-cover" />
            </div>
            <div className="mt-2 flex h-12 items-center justify-center px-2 text-center text-sm text-[#00A3DA] md:text-xl">{c.title}</div>
            <div className="flex justify-center p-3"><a href={c.href} className="btn-matw h-10">{c.cta}</a></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage({ content, locale = "en" }) {
  return (
    <div className="min-h-screen bg-white">
      <LangSetter locale={locale} />
      <Header content={content} locale={locale} />
      <AnnouncementBar messages={content.announcement} />
      <QuickDonateBar content={content} />
      <HeroSlider content={content} />
      <UrgentAppeals u={content.urgent} />
      <AliBanatStory legacy={content.legacy} video={content.video} />
      <GetInvolved g={content.getInvolved} />
      <div className="h-12" />
      <Footer content={content} />
    </div>
  );
}
