"use client";

import { useState } from "react";
import { presetAmounts } from "../lib/siteData";

const programs = [
  "Most Needed Now",
  "Gaza Emergency",
  "Sudan Emergency",
  "Zakat",
  "Sadaqah Jariyah",
  "Water Aid",
];

export default function QuickDonateBar() {
  const [amount, setAmount] = useState("");
  const [active, setActive] = useState(null);
  const [program, setProgram] = useState(programs[0]);

  return (
    <section className="matw-gradient w-full px-3 py-3 md:px-6 md:py-6">
      <div className="mx-auto w-full md:container">
        <div className="grid grid-cols-12 gap-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1fr_1fr] lg:px-2">
          {/* Currency + amount */}
          <div className="order-3 col-span-12 flex h-[42px] items-center rounded-md bg-white md:col-span-5 md:order-1 lg:col-span-1">
            <span className="flex items-center gap-1 border-r px-3 text-[15px] font-medium text-[#777]">
              🇺🇸 USD
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => { setAmount(e.target.value); setActive(null); }}
              placeholder="Amount"
              className="h-[42px] w-full truncate p-2 pl-2 text-[#777] focus:outline-none"
            />
          </div>

          {/* Preset amounts */}
          <div className="order-2 col-span-12 grid grid-cols-4 gap-2 md:order-3 lg:order-2 lg:col-span-1 lg:flex">
            {presetAmounts.map((amt, i) => (
              <button
                key={amt}
                onClick={() => { setActive(i); setAmount(amt.replace("$", "")); }}
                className={`flex min-w-[60px] items-center justify-center rounded-md px-2 py-2 text-sm transition-all duration-200 md:px-4 md:py-3 ${
                  active === i ? "bg-[#f60362] text-white" : "bg-white text-[#093484] hover:bg-[#e2eff3]"
                }`}
              >
                {amt}
              </button>
            ))}
          </div>

          {/* Program select */}
          <div className="order-1 col-span-12 md:order-2 md:col-span-7 lg:order-3 lg:col-span-1">
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="h-[42px] w-full rounded-md px-3 text-[#777] focus:outline-none"
            >
              {programs.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Accepted cards */}
          <div className="order-4 col-span-6 flex h-[42px] items-center justify-center gap-1 rounded-md bg-[#80ceff] px-3 lg:col-span-1">
            {["VISA", "MC", "AMEX", "PAY"].map((c) => (
              <span key={c} className="rounded bg-white px-1 text-[9px] font-bold text-[#093484]">{c}</span>
            ))}
          </div>

          {/* Quick donate */}
          <div className="order-5 col-span-6 lg:col-span-1">
            <button className="btn-matw h-[42px] w-full">Quick Donate</button>
          </div>
        </div>
      </div>
    </section>
  );
}
