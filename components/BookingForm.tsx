"use client";

import { useState, FormEvent } from "react";

type TripType = "flight" | "tour" | "rental" | "umrah";

const TOUR_OPTIONS = [
  "Lalibela — 3-day heritage tour",
  "Simien Mountains — 4-day trek",
  "Axum — weekend heritage tour",
  "Custom itinerary",
];

const RENTAL_OPTIONS = [
  "Bole Guest House, Addis Ababa",
  "Hawassa Lakeside Villa",
  "Bahir Dar Guest House",
  "Adama Family Villa",
  "Not sure yet — recommend one",
];

function makeReference() {
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `DRT-${rand}`;
}

export default function BookingForm() {
  const [tripType, setTripType] = useState<TripType>("flight");
  const [roundTrip, setRoundTrip] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // This form is front-end only: it validates and simulates a booking
    // request. Wire the fetch below to your reservations API or CRM to
    // make it live — for example:
    //   await fetch("/api/bookings", { method: "POST", body: formData })
    window.setTimeout(() => {
      setReference(makeReference());
      setSubmitting(false);
    }, 900);
  }

  if (reference) {
    return (
      <div className="rounded-2xl border border-highland/30 bg-white p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-highland/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2E5C4E" strokeWidth="2" className="h-7 w-7">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy">Request received</h3>
        <p className="mx-auto mt-2 max-w-sm font-body text-sm text-navy/70">
          Thank you{name ? `, ${name}` : ""}. A Deeratna travel consultant will confirm
          availability and pricing with you by phone or email within one business day.
        </p>
        <p className="mt-6 font-mono text-sm text-navy/55">
          Reference <span className="font-bold text-terracotta">{reference}</span>
        </p>
        <button
          onClick={() => setReference(null)}
          className="mt-8 rounded-full border border-navy/15 px-6 py-2.5 font-body text-sm font-semibold text-navy hover:border-terracotta hover:text-terracotta"
        >
          Start another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy/10 bg-white p-6 md:p-10">
      <div className="mb-8 flex flex-wrap gap-2">
        {(
          [
            { key: "flight", label: "Flight" },
            { key: "tour", label: "Tour Package" },
            { key: "rental", label: "Guest House & Villa" },
            { key: "umrah", label: "Visa & Umrah" },
          ] as const
        ).map((t) => (
          <button
            type="button"
            key={t.key}
            onClick={() => setTripType(t.key)}
            className={`rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-wide transition-colors ${
              tripType === t.key ? "bg-navy text-parchment" : "bg-navy/5 text-navy/70 hover:bg-navy/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
            Full name
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="As it appears on your passport"
            className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
            Phone or email
          </span>
          <input
            required
            placeholder="+251 9xx xxx xxx"
            className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
          />
        </label>

        {tripType === "flight" && (
          <>
            <label className="block">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                From
              </span>
              <input
                required
                defaultValue="Addis Ababa (ADD)"
                className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                To
              </span>
              <input
                required
                placeholder="e.g. Dubai (DXB)"
                className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
              />
            </label>

            <div className="md:col-span-2">
              <div className="mb-3 flex gap-5">
                <label className="flex items-center gap-2 font-body text-xs font-semibold text-navy/70">
                  <input
                    type="radio"
                    checked={roundTrip}
                    onChange={() => setRoundTrip(true)}
                    className="h-3.5 w-3.5 accent-gold"
                  />
                  Round trip
                </label>
                <label className="flex items-center gap-2 font-body text-xs font-semibold text-navy/70">
                  <input
                    type="radio"
                    checked={!roundTrip}
                    onChange={() => setRoundTrip(false)}
                    className="h-3.5 w-3.5 accent-gold"
                  />
                  One way
                </label>
              </div>

              <div className={`grid gap-5 ${roundTrip ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                    Departure date
                  </span>
                  <input
                    required
                    type="date"
                    className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
                  />
                </label>

                {roundTrip && (
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                      Return date
                    </span>
                    <input
                      required
                      type="date"
                      className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
                    />
                  </label>
                )}
              </div>
            </div>
          </>
        )}

        {tripType === "tour" && (
          <label className="block md:col-span-2">
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
              Tour package
            </span>
            <select
              required
              defaultValue=""
              className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
            >
              <option value="" disabled>
                Choose a package
              </option>
              {TOUR_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        )}

        {tripType === "rental" && (
          <>
            <label className="block md:col-span-2">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                Guest house or villa
              </span>
              <select
                required
                defaultValue=""
                className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
              >
                <option value="" disabled>
                  Choose a property
                </option>
                {RENTAL_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                Check-in
              </span>
              <input
                required
                type="date"
                className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
                Check-out
              </span>
              <input
                required
                type="date"
                className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
              />
            </label>
          </>
        )}

        {tripType === "umrah" && (
          <label className="block md:col-span-2">
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
              Notes for your consultant
            </span>
            <textarea
              rows={2}
              placeholder="Number of pilgrims, preferred dates, visa status"
              className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
            />
          </label>
        )}

        {tripType !== "flight" && tripType !== "rental" && (
          <label className="block">
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
              Preferred date
            </span>
            <input
              required
              type="date"
              className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
            />
          </label>
        )}

        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-navy/60">
            {tripType === "rental" ? "Guests" : "Travelers"}
          </span>
          <input
            required
            type="number"
            min={1}
            defaultValue={1}
            className="w-full rounded-lg border border-navy/15 px-3.5 py-3 font-body text-sm text-ink outline-none focus:border-gold"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 w-full rounded-full bg-terracotta py-3.5 font-body text-sm font-bold text-parchment transition-transform hover:-translate-y-0.5 disabled:opacity-60 md:w-auto md:px-10"
      >
        {submitting ? "Sending request…" : "Submit booking request"}
      </button>
      <p className="mt-3 font-body text-xs text-navy/55">
        No payment is taken here — a consultant confirms fare and availability before you pay.
      </p>
    </form>
  );
}
