"use client";

import { useState } from "react";
import { primaryMenus } from "../lib/siteData";
import { startCheckout } from "../lib/donate";

const donate = () => startCheckout({ program: "Most Needed Now", frequency: "one_time" });

function Chevron({ className = "" }) {
  return (
    <svg className={`w-3 h-3 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function CartBadge() {
  return (
    <span className="relative inline-flex items-center">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l1.5 12.75h12l1.5-9H6M9 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      <span
        className="pointer-events-none absolute -top-2 -right-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ED0B6D] px-1 text-[10px] font-bold text-white"
        aria-label="1 items in cart"
      >
        1
      </span>
    </span>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="matw-gradient sticky top-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-screen-2xl lg:px-3">
        <div className="relative flex h-16 items-center justify-between lg:h-24">
          {/* ---------- Mobile bar ---------- */}
          <div className="flex w-full items-center justify-between px-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-16 items-center p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            <a href="/" className="flex items-center">
              <Logo className="h-[40px] w-[40px]" />
              <span className="ml-2 text-[13px] font-semibold uppercase text-white">MATW Project</span>
            </a>

            <div className="flex items-center gap-1 text-white">
              <QuickIcon label="Zakat" />
              <span className="px-1"><CartBadge /></span>
              <button type="button" onClick={donate} className="btn-matw h-10">Donate</button>
            </div>
          </div>

          {/* ---------- Desktop bar ---------- */}
          <div className="hidden w-full items-center justify-between lg:flex">
            <a href="/" className="flex items-center pl-1">
              <Logo className="h-[64px] w-[66px]" />
              <span className="ml-2 text-[14px] font-semibold uppercase text-white">MATW Project</span>
            </a>

            <ul className="flex h-24 items-center">
              <li className="flex h-24 items-center px-2">
                <LanguageSwitcher />
              </li>
              <QuickIcon label="Zakat" big />
              <QuickIcon label="Sudan Hot Meals" big />

              {primaryMenus.map((menu) => (
                <li key={menu.label} className="group relative flex h-24 items-center border-l border-white/10 px-3">
                  <span className="flex cursor-pointer items-center gap-1 text-[14px] uppercase text-white transition-all duration-200 group-hover:text-white/80">
                    {menu.label}
                    <Chevron className="mt-[2px]" />
                  </span>
                  <ul className="invisible absolute left-0 top-24 z-[1000] flex min-w-[270px] flex-col rounded-md bg-white p-4 opacity-0 shadow-md transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    {menu.items.map((item) => (
                      <li key={item.label} className="group/sub relative flex items-center justify-between hover:bg-stone-100">
                        <a href={item.href} className="block px-3 py-1 text-[15px] text-[#777] transition-all hover:text-[#00a3da]">
                          {item.label}
                        </a>
                        {item.children && <Chevron className="mr-2 -rotate-90 text-[#777]" />}
                        {item.children && (
                          <ul className="invisible absolute left-full top-0 -ml-2 flex min-w-[260px] flex-col rounded-md bg-white p-4 opacity-0 shadow-md transition-all group-hover/sub:visible group-hover/sub:opacity-100">
                            {item.children.map((c) => (
                              <li key={c.label} className="hover:bg-stone-100">
                                <a href={c.href} className="block px-3 py-1 text-[15px] text-[#777] transition-all hover:text-[#00a3da]">
                                  {c.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="flex h-24 items-center border-l border-white/10 px-4 text-white">
                <CartBadge />
              </li>
              <li className="flex items-center pl-3">
                <div className="flex flex-col items-center">
                  <button type="button" onClick={donate} className="btn-matw h-11 px-6 text-[14px]">Donate</button>
                  <a href="tel:+18007182427" className="mt-1 text-[12px] text-white/90">1-800-718-2427</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      {mobileOpen && (
        <ul className="flex flex-col bg-[#00a3da] lg:hidden">
          {primaryMenus.map((menu) => (
            <li key={menu.label} className="border-b border-[#81c3ed] px-4 py-2">
              <span className="flex px-1 text-[15px] font-medium text-white">{menu.label}</span>
              <ul className="mt-1 rounded-md bg-[#65bff7] px-3 py-1">
                {menu.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="block py-1 pl-2 text-[15px] text-white hover:text-white/80">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="flex flex-col items-center py-3">
            <a href="tel:+18007182427" className="py-1 text-xl text-white">1-800-718-2427</a>
            <span className="px-3 text-white/90">10am–8pm</span>
          </li>
        </ul>
      )}
    </nav>
  );
}

function Logo({ className = "" }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/assets/logo.png" alt="Muslim Charity MATW" className={`object-contain ${className}`} />;
}

const QUICK_ICONS = {
  Zakat: "/assets/icon-zakat.png",
  "Sudan Hot Meals": "/assets/icon-meal.png",
};

function QuickIcon({ label, big = false }) {
  const size = big ? "h-[52px] w-[52px]" : "h-[30px] w-[30px]";
  return (
    <li className={`flex ${big ? "h-24 flex-col" : "flex-col"} items-center justify-center border-l border-white/10 px-2 text-white`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={QUICK_ICONS[label]} alt={label} className={`${size} rounded-full object-cover`} />
      <span className={`mt-1 max-w-[80px] text-center leading-tight ${big ? "text-[12px]" : "text-[10px]"}`}>{label}</span>
    </li>
  );
}

function LanguageSwitcher() {
  return (
    <div className="group relative">
      <span className="flex cursor-pointer items-center gap-1 text-[14px] uppercase text-white">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg>
        EN
      </span>
      <ul className="invisible absolute -right-3 top-6 z-[99] w-[130px] flex-col rounded-md bg-white p-3 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
        {["English", "Français", "العربية", "Español", "Deutsch", "Nederlands"].map((l) => (
          <li key={l} className="py-1 text-[15px] text-[#093484] hover:text-[#00a3da]">{l}</li>
        ))}
      </ul>
    </div>
  );
}
