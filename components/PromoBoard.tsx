const PROMOS = [
  { code: "DXB-01", route: "Addis Ababa → Dubai", detail: "Round-trip, economy", price: "USD 410", tag: "HOT DEAL" },
  { code: "UMR-14", route: "Addis Ababa → Jeddah", detail: "Umrah package · 10 nights", price: "USD 1,250", tag: "SEASONAL" },
  { code: "LAL-07", route: "Addis Ababa → Lalibela", detail: "3-day rock-church tour", price: "ETB 18,900", tag: "LOCAL" },
  { code: "IST-22", route: "Addis Ababa → Istanbul", detail: "Round-trip, economy", price: "USD 520", tag: "LIMITED" },
  { code: "SIM-03", route: "Gondar → Simien Mountains", detail: "4-day trek + lodge", price: "ETB 24,500", tag: "ADVENTURE" },
  { code: "AXM-09", route: "Addis Ababa → Axum", detail: "Heritage weekend tour", price: "ETB 14,200", tag: "LOCAL" },
];

function Row({ p }: { p: (typeof PROMOS)[number] }) {
  return (
    <div className="board-row grid grid-cols-[80px_1fr_auto_auto] items-center gap-4 px-6 py-4 md:grid-cols-[100px_1fr_1fr_auto_auto] md:px-8">
      <span className="font-mono text-xs text-gold/80 md:text-sm">{p.code}</span>
      <span className="flap font-mono text-sm text-parchment md:text-base">{p.route}</span>
      <span className="hidden font-body text-sm text-white/90 md:inline">{p.detail}</span>
      <span className="font-mono text-sm font-bold text-gold md:text-base">{p.price}</span>
      <span className="hidden rounded border border-terracotta/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-terracotta sm:inline">
        {p.tag}
      </span>
    </div>
  );
}

export default function PromoBoard() {
  const doubled = [...PROMOS, ...PROMOS];

  return (
    <section id="promotions" className="bg-navy-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Current Promotions</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-parchment md:text-4xl">
              Departures Board
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-parchment/72">
            Fares update seasonally. Hover to pause the board and read a fare in full —
            book any route below in a few minutes.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-parchment/10 bg-navy shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-parchment/10 bg-navy-dark px-6 py-3 md:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-parchment/62">
              Route
            </span>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-parchment/62">
              <span className="h-1.5 w-1.5 animate-flicker rounded-full bg-highland" />
              Live
            </span>
          </div>

          <div className="group relative h-[260px] overflow-hidden md:h-[300px]">
            <div className="animate-board-scroll group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {doubled.map((p, i) => (
                <Row p={p} key={`${p.code}-${i}`} />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-navy to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-navy to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
