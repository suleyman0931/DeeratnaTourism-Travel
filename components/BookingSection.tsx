import BookingForm from "./BookingForm";

export default function BookingSection() {
  return (
    <section id="booking" className="relative bg-navy py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Reserve Your Trip</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-parchment md:text-4xl">
            Tell us where you&apos;re headed.
          </h2>
          <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-parchment/65">
            Submit a request and a Deeratna consultant will call or email you with fares,
            availability and next steps — no payment is collected on this page.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Confirmation within one business day",
              "Fares held while you decide",
              "Guest houses & villas rented directly with us",
              "Umrah visa documents reviewed for you",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-parchment/75">
                <svg viewBox="0 0 24 24" fill="none" stroke="#C99A3E" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
