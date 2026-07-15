export default function CtaBanner() {
  return (
    <section className="bg-terracotta">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <div>
          <h2 className="font-display text-2xl font-semibold text-parchment md:text-3xl">
            Planning Umrah, a family trip, or a work route?
          </h2>
          <p className="mt-1 font-body text-sm text-parchment/80">
            Speak with a consultant today — Sunday to Friday, 8:00 to 19:00 EAT.
          </p>
        </div>
        <a
          href="#booking"
          className="shrink-0 rounded-full bg-navy-dark px-8 py-3.5 font-body text-sm font-bold text-parchment transition-transform hover:-translate-y-0.5"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}
