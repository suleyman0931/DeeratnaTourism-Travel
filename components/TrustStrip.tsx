const STATS = [
  {
    value: "12+",
    label: "Years arranging travel",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
        <path d="M12 7v5l3.2 2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    value: "40+",
    label: "Destinations served",
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.8 12 21 12 21z" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="9.5" r="2.4" strokeWidth="1.6" />
      </>
    ),
  },
  {
    value: "8,500+",
    label: "Travelers booked",
    icon: (
      <>
        <circle cx="8.5" cy="8" r="3" strokeWidth="1.6" />
        <circle cx="16.5" cy="9" r="2.4" strokeWidth="1.6" />
        <path d="M2.5 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 14.3c2.6.3 4.5 2.3 4.5 5.2" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    value: "24/7",
    label: "Traveler support line",
    icon: (
      <path
        d="M4 15v-2a8 8 0 0116 0v2M4 15a2 2 0 002 2h1v-5H5a2 2 0 00-2 2zm16 0a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2zM8 19a4 4 0 004 2"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-parchment-dark py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,154,62,0.10),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:gap-x-6 md:px-10">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-start gap-4 px-2 md:px-6 ${
              i > 0 ? "md:border-l md:border-navy/10" : ""
            }`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/8 text-terracotta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                {s.icon}
              </svg>
            </span>
            <div>
              <p className="font-display text-3xl font-bold leading-none text-navy md:text-4xl">{s.value}</p>
              <p className="mt-2 font-body text-sm font-medium leading-snug text-navy/70">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
