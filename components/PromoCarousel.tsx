"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    title: "Your Mauritius Holiday Awaits",
    subtitle: "7 nights, beachfront all-inclusive resort with transfers",
    price: "From USD 899",
    tag: "Beach Escape",
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Zanzibar's Spice Coast",
    subtitle: "5-day island escape with a guided spice-farm tour",
    price: "From USD 650",
    tag: "Island Getaway",
    img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Dubai City & Desert Combo",
    subtitle: "4 nights hotel plus a desert safari, fully arranged",
    price: "From USD 540",
    tag: "City Break",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Umrah Ramadan Special",
    subtitle: "10 nights, Mecca and Medina hotels included",
    price: "From USD 1,150",
    tag: "Umrah Package",
    img: "/umrah-kaaba.png",
  },
];

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      aria-label="Featured promotions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[380px] w-full overflow-hidden bg-navy-dark md:h-[480px]"
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            aria-hidden={i !== index}
            className="relative h-full w-full shrink-0"
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />

            <div className="relative flex h-full max-w-7xl flex-col justify-center px-6 md:mx-auto md:px-10">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-navy-dark">
                {s.tag}
              </span>
              <h3 className="max-w-xl font-display text-3xl font-semibold italic leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md font-body text-sm text-white/85 drop-shadow-sm md:text-base">
                {s.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="rounded-full bg-gold px-6 py-3 font-body text-sm font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
                >
                  Book This Deal
                </a>
                <span className="font-mono text-sm font-semibold text-white/90">{s.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* prev / next arrows */}
      <button
        aria-label="Previous promotion"
        onClick={() => go(index - 1)}
        className="group absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-dark/40 text-white backdrop-blur transition-colors hover:bg-gold hover:text-navy-dark md:left-6"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        aria-label="Next promotion"
        onClick={() => go(index + 1)}
        className="group absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-dark/40 text-white backdrop-blur transition-colors hover:bg-gold hover:text-navy-dark md:right-6"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* dot indicators */}
      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Go to promotion ${i + 1}: ${s.title}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
