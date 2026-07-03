import { footerColumns, socialLinks, countrySites, paymentIcons, trustBadges } from "../lib/siteData";

export default function Footer() {
  return (
    <footer>
      {/* Payment + trust strip */}
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-4">
        <div className="mx-auto grid max-w-2xl grid-cols-5 items-center gap-4 px-4">
          {paymentIcons.map((p) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={p.label} src={p.src} alt={p.label} className="h-auto w-full object-contain" />
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-10">
          {trustBadges.map((t) => (
            <div key={t.label} className="flex flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-stone-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.src} alt={t.label} className="h-6 w-6 object-contain" />
              </span>
              <span className="mt-2 text-center text-sm font-medium text-stone-500">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Link columns */}
      <div className="matw-gradient px-2 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="pb-3 pt-2 text-[20px] font-bold text-white">{col.heading}</h3>
              <ul className="flex flex-col">
                {col.links.map((link) => (
                  <li key={link.label} className="py-1 text-[#c6e9ff] transition-all duration-200 hover:pl-1">
                    <a href={link.href} className="font-light">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + country switcher */}
          <div className="flex flex-col lg:col-span-1 sm:col-span-2">
            <p className="mb-2 text-[14px] font-semibold text-[#C6E9FF]">Join our social media</p>
            <div className="mb-6 flex items-center gap-5">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt={s.label} className="h-8 w-8" />
                </a>
              ))}
            </div>
            <span className="mb-2 font-medium text-white">Muslim Charity - (USA)</span>
            <nav className="pb-2">
              <ul className="divide-y divide-white/10">
                {countrySites.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className={`block rounded-lg px-3 py-2 text-sm hover:bg-white/10 ${c.current ? "font-semibold text-white" : "text-white/90"}`}
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Policy + accepted-cards logos */}
      <div className="matw-gradient px-4 pb-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-2 sm:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-policy.png" alt="MATW Project Policy Logos" className="h-[50px] w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-cards.png" alt="Accepted Cards" className="h-[35px] w-auto" />
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full bg-[#282828] px-4 py-6 lg:px-12">
        <p className="text-center text-lg text-[#aaa]">
          MATW PROJECT USA, A 501(C)(3) ORGANIZATION, 2461 EISENHOWER AVE 2ND FL, ALEXANDRIA, VA 22314,
          EIN: 92-1915834 © 2016–2026 MUSLIMS AROUND THE WORLD PROJECT (MATW)
        </p>
      </div>
    </footer>
  );
}
