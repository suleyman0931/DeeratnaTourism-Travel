"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Flight Booking",
    desc: "Domestic and international fares across the Ethiopian, Gulf and European carrier networks, held and ticketed on your timeline.",
    icon: (
      <path d="M3 13l7-2 4-8 2 1-2 7 6-1 2 2-7 3-1 6-2 1-1-6-7 2z" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Hotel Reservations",
    desc: "Vetted hotels near the sites that matter — heritage cities, business districts and airport transit stays.",
    icon: (
      <>
        <path d="M3 21V8l9-5 9 5v13" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 21v-7h6v7" strokeWidth="1.6" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Guest House & Villa Rentals",
    subtitle: "",
    desc: "Our own guest houses and villas across Ethiopia, available to rent by the night, week or month — furnished, serviced and ready to move in.",
    icon: (
      <>
        <path d="M3 11L12 4l9 7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v10h14V10" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 20v-6h6v6" strokeWidth="1.6" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Tour Packages",
    desc: "Guided itineraries through Lalibela, Axum, the Simien Mountains and Ethiopia's other UNESCO sites, priced end-to-end.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
        <path d="M12 3v18M3 12h18" strokeWidth="1.2" opacity="0.6" />
      </>
    ),
  },
  {
    title: "Visa & Umrah Assistance",
    desc: "Document preparation, appointment scheduling and full Umrah package support for pilgrims traveling to the Kingdom.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.6" />
        <path d="M7 9h6M7 13h4" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector(".service-card");
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 28; // gap-7 is 28px
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
        const card = container.querySelector(".service-card");
        if (card) {
          const cardWidth = card.clientWidth;
          const gap = 28;
          container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="services" className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta">What We Arrange</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-navy md:text-4xl">
              One agency, every leg of the trip.
            </h2>
          </div>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="relative mt-14 overflow-hidden lg:hidden">
          {/* Arrow Buttons - positioned on the carousel */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous service"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-terracotta/30 bg-white/90 text-navy backdrop-blur-sm transition-colors hover:bg-terracotta hover:text-white hover:border-terracotta shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next service"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-terracotta/30 bg-white/90 text-navy backdrop-blur-sm transition-colors hover:bg-terracotta hover:text-white hover:border-terracotta shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="no-scrollbar flex gap-7 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="service-card group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl border border-navy/10 bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-2xl hover:shadow-navy/10 sm:w-[320px]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/0 transition-colors duration-300 group-hover:bg-gold/10" />

                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-terracotta group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
                    {s.icon}
                  </svg>
                </span>

                <h3 className="relative mt-7 flex items-baseline gap-2 font-display text-xl font-semibold text-navy">
                  {s.title}
                  {s.subtitle && (
                    <span className="font-body text-sm font-medium text-terracotta">{s.subtitle}</span>
                  )}
                </h3>
                <p className="relative mt-3 font-body text-[15px] leading-relaxed text-navy/70">{s.desc}</p>

                {s.title === "Guest House & Villa Rentals" && (
                  <a
                    href="#rentals"
                    className="relative mt-5 inline-flex items-center gap-1.5 font-body text-sm font-bold text-terracotta"
                  >
                    View properties
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="mt-14 hidden gap-7 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-2xl hover:shadow-navy/10"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/0 transition-colors duration-300 group-hover:bg-gold/10" />

              <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-terracotta group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
                  {s.icon}
                </svg>
              </span>

              <h3 className="relative mt-7 flex items-baseline gap-2 font-display text-xl font-semibold text-navy">
                {s.title}
                {s.subtitle && (
                  <span className="font-body text-sm font-medium text-terracotta">{s.subtitle}</span>
                )}
              </h3>
              <p className="relative mt-3 font-body text-[15px] leading-relaxed text-navy/70">{s.desc}</p>

              {s.title === "Guest House & Villa Rentals" && (
                <a
                  href="#rentals"
                  className="relative mt-5 inline-flex items-center gap-1.5 font-body text-sm font-bold text-terracotta"
                >
                  View properties
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
