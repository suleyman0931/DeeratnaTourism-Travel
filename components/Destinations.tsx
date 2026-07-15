"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DESTINATIONS = [
  {
    name: "Lalibela",
    country: "Ethiopia",
    note: "Rock-hewn churches",
    detail: "11 medieval churches carved into volcanic rock, still active pilgrimage sites.",
    from: "ETB 14,900",
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Simien Mountains",
    country: "Ethiopia",
    note: "Highland trekking",
    detail: "Jagged escarpments, gelada baboons, and lodge-to-lodge trekking above 3,000m.",
    from: "ETB 24,500",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Axum",
    country: "Ethiopia",
    note: "Ancient obelisks",
    detail: "The obelisk fields and royal tombs of Ethiopia's ancient Aksumite capital.",
    from: "ETB 14,200",
    img: "https://images.unsplash.com/photo-1590766940554-153fac2b8b91?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    note: "Business & transit stays",
    detail: "Short-stay hotel and transit packages timed around your connecting flight.",
    from: "USD 410",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mecca & Medina",
    country: "Saudi Arabia",
    note: "Umrah packages",
    detail: "Full Umrah support: visa, flights, and hotel walking distance from the Haram.",
    from: "USD 1,250",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Istanbul",
    country: "Türkiye",
    note: "Stopover city breaks",
    detail: "A two-continent city break, built around your Addis–Europe connection.",
    from: "USD 520",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Destinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector(".destination-card");
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 20; // gap-5 is 20px
        const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      // If we are close to the end, wrap around to the start
      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = container.querySelector(".destination-card");
        if (card) {
          const cardWidth = card.clientWidth;
          const gap = 20;
          container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="destinations" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Where We Go</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-parchment md:text-4xl">
              Popular destinations
            </h2>
          </div>
          <a
            href="#booking"
            className="font-body text-sm font-semibold text-gold underline-offset-4 hover:underline"
          >
            Plan a custom route →
          </a>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="relative mt-12 overflow-hidden lg:hidden">
          {/* Arrow Buttons - positioned on the carousel */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous destination"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-navy-dark/80 text-gold backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy-dark hover:border-gold shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next destination"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-navy-dark/80 text-gold backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy-dark hover:border-gold shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="no-scrollbar flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {DESTINATIONS.map((d) => (
              <a
                key={d.name}
                href="#booking"
                className="destination-card group relative block h-80 w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 sm:w-[320px]"
              >
                <Image
                  src={d.img}
                  alt={`${d.name}, ${d.country}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.55]"
                />

                {/* base scrim, always visible for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                {/* ring that appears on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />

                {/* price badge */}
                <span className="absolute right-4 top-4 rounded-full bg-navy-dark/70 px-3 py-1 font-mono text-[11px] text-gold backdrop-blur transition-all duration-500 group-hover:bg-gold group-hover:text-navy-dark">
                  {d.from}
                </span>

                {/* base label, slides up slightly and gives room to the reveal on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold">{d.country}</p>
                  <h3 className="font-display text-xl font-semibold text-parchment">{d.name}</h3>
                  <p className="font-body text-xs text-parchment/70">{d.note}</p>

                  {/* reveal-on-hover detail + CTA */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-2 max-w-[26ch] font-body text-xs leading-relaxed text-parchment/80">
                        {d.detail}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 font-body text-xs font-bold text-gold">
                        Explore this trip
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <a
              key={d.name}
              href="#booking"
              className="group relative block h-80 overflow-hidden rounded-2xl shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
            >
              <Image
                src={d.img}
                alt={`${d.name}, ${d.country}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.55]"
              />

              {/* base scrim, always visible for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* ring that appears on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />

              {/* price badge */}
              <span className="absolute right-4 top-4 rounded-full bg-navy-dark/70 px-3 py-1 font-mono text-[11px] text-gold backdrop-blur transition-all duration-500 group-hover:bg-gold group-hover:text-navy-dark">
                {d.from}
              </span>

              {/* base label, slides up slightly and gives room to the reveal on hover */}
              <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold">{d.country}</p>
                <h3 className="font-display text-xl font-semibold text-parchment">{d.name}</h3>
                <p className="font-body text-xs text-parchment/70">{d.note}</p>

                {/* reveal-on-hover detail + CTA */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-2 max-w-[26ch] font-body text-xs leading-relaxed text-parchment/80">
                      {d.detail}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-body text-xs font-bold text-gold">
                      Explore this trip
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
