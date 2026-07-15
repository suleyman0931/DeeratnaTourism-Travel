"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const RENTALS = [
  {
    name: "Bole Guest House",
    type: "Guest House",
    city: "Addis Ababa",
    beds: 3,
    guests: 6,
    price: "ETB 3,800 / night",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Hawassa Lakeside Villa",
    type: "Villa",
    city: "Hawassa",
    beds: 4,
    guests: 8,
    price: "ETB 7,200 / night",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bahir Dar Guest House",
    type: "Guest House",
    city: "Bahir Dar",
    beds: 2,
    guests: 4,
    price: "ETB 3,200 / night",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Adama Family Villa",
    type: "Villa",
    city: "Adama",
    beds: 5,
    guests: 10,
    price: "ETB 8,500 / night",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Rentals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector(".rental-card");
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // gap-6 is 24px
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
        const card = container.querySelector(".rental-card");
        if (card) {
          const cardWidth = card.clientWidth;
          const gap = 24;
          container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="rentals" className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta">
              Guest House &amp; Villa Rentals
            </p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-navy md:text-4xl">
              Our own properties, ready to rent.
            </h2>
            <p className="mt-3 max-w-xl font-body text-[15px] leading-relaxed text-navy/70">
              Deeratna owns and manages a small portfolio of guest houses and villas across
              Ethiopia. Book directly with us by the night, week or month — no third-party
              platform in between.
            </p>
          </div>
          <a
            href="#booking"
            className="font-body text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            Enquire about a property →
          </a>
        </div>

        <div className="relative mt-12 overflow-hidden">
          {/* Arrow Buttons - positioned on the carousel */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous property"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/90 text-navy backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy-dark hover:border-gold shadow-lg md:left-4"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next property"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/90 text-navy backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy-dark hover:border-gold shadow-lg md:right-4"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {RENTALS.map((r) => (
              <a
                key={r.name}
                href="#booking"
                className="rental-card group block w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-md shadow-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/15 sm:w-[320px] md:w-[340px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={r.img}
                    alt={`${r.name}, ${r.city}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-navy-dark/80 px-3 py-1 font-mono text-[11px] text-gold backdrop-blur">
                    {r.type}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-navy/45">{r.city}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy">{r.name}</h3>
                  <p className="mt-1.5 font-body text-xs text-navy/60">
                    {r.beds} bedrooms · sleeps {r.guests}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-4">
                    <span className="font-body text-sm font-bold text-terracotta">{r.price}</span>
                    <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-navy/70 transition-transform group-hover:translate-x-1">
                      Enquire
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
