"use client";

import { useEffect, useState, useCallback } from "react";
import { heroSlides } from "../lib/siteData";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback((n) => setIndex((n + count) % count), [count]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section className="w-full px-2 py-4 sm:px-0">
      <div className="mx-auto flex flex-col items-center md:container">
        <div className="relative w-full overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <a key={slide.label} href={slide.href} className="w-full shrink-0 basis-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.img}
                  alt={slide.label}
                  className="h-[220px] w-full rounded-lg object-cover object-top sm:h-[320px] md:h-[420px]"
                />
              </a>
            ))}
          </div>

          <button
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white"
          >
            ‹
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white"
          >
            ›
          </button>
        </div>

        <div className="flex pt-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`mx-[5px] h-[10px] w-[10px] rounded-full p-1 transition ${
                i === index ? "bg-[#253A7E]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
