"use client";

import { useEffect, useRef, useState } from "react";

const QUOTES = [
  {
    quote:
      "Our Umrah group's visas, flights and Jeddah hotel were handled as one booking. Nothing was left for us to chase.",
    name: "Hanan M.",
    trip: "Umrah group, 14 pilgrims",
  },
  {
    quote:
      "The Simien Mountains trek was arranged down to the lodge stops. Our guide met us at Gondar airport exactly on time.",
    name: "Samuel T.",
    trip: "4-day highland trek",
  },
  {
    quote:
      "I booked a same-week Addis–Dubai fare for a work trip and had a confirmed seat within a few hours.",
    name: "Fatima A.",
    trip: "Business travel, Dubai",
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector(".testimonial-card");
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
        const card = container.querySelector(".testimonial-card");
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
    <section className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta">Traveler Notes</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold text-navy md:text-4xl">
              What people say after they land.
            </h2>
          </div>
          {/* Arrow Buttons - visible on mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 bg-white text-navy hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4.5 w-4.5">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 bg-white text-navy hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4.5 w-4.5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="relative mt-14 overflow-hidden md:hidden">
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {QUOTES.map((q) => (
              <figure 
                key={q.name} 
                className="testimonial-card w-[280px] shrink-0 snap-start rounded-2xl border border-navy/10 bg-white p-7 sm:w-[320px]"
              >
                <svg viewBox="0 0 32 24" className="h-6 w-8 text-gold" fill="currentColor">
                  <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.2C9.6 4.8 6.4 8 6.4 12h6.4v12H0zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4L32 3.2C27.2 4.8 24 8 24 12h6.4v12H17.6z" />
                </svg>
                <blockquote className="mt-4 font-body text-sm leading-relaxed text-navy/75">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-navy/10 pt-4">
                  <p className="font-display text-sm font-semibold text-navy">{q.name}</p>
                  <p className="font-body text-xs text-navy/60">{q.trip}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-navy/10 bg-white p-7">
              <svg viewBox="0 0 32 24" className="h-6 w-8 text-gold" fill="currentColor">
                <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.2C9.6 4.8 6.4 8 6.4 12h6.4v12H0zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4L32 3.2C27.2 4.8 24 8 24 12h6.4v12H17.6z" />
              </svg>
              <blockquote className="mt-4 font-body text-sm leading-relaxed text-navy/75">
                {q.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-navy/10 pt-4">
                <p className="font-display text-sm font-semibold text-navy">{q.name}</p>
                <p className="font-body text-xs text-navy/60">{q.trip}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
