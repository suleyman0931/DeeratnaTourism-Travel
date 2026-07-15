"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#rentals", label: "Rentals" },
  { href: "#promotions", label: "Promotions" },
  { href: "#booking", label: "Book" },
  { href: "#contact", label: "Contact" },];
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []); return (
    <>
      {/* Top navigation bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-navy-dark/95 backdrop-blur shadow-lg shadow-black/20" : "bg-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt="Deeratna Tourism and Travel"
              width={44}
              height={41}
              className="h-10 w-auto"
              priority
            />
            <span className="font-display text-lg font-semibold tracking-tight text-parchment">
              Deeratna
              <span className="ml-1 font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Tourism &amp; Travel
              </span>
            </span>
          </a>
          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm font-medium text-parchment/85 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className="hidden rounded-full bg-gold px-5 py-2.5 font-body text-sm font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 md:inline-block"
          >
            Book Now
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-parchment/20 md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-parchment transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            /><span className={`h-0.5 w-5 bg-parchment transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-parchment transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            /> </button>
        </nav>
      </header>
      {/* Backdrop — rendered outside <header> so backdrop-filter doesn't break fixed children */}
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Mobile menu drawer — rendered outside <header> for correct stacking */}
      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-screen w-72 bg-navy shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-parchment/10 px-6 py-4">
          <span className="font-display text-base font-semibold text-parchment">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment/20 text-parchment hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="2" y1="2" x2="14" y2="14" />
              <line x1="14" y1="2" x2="2" y2="14" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <ul className="flex flex-col gap-0 px-4 pt-4">
          {LINKS.map((l) => (
            <li key={l.href} className="group">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 font-body text-sm font-semibold tracking-wide text-parchment/70 border-l-2 border-transparent transition-all duration-200 hover:bg-white/[0.08] hover:border-gold hover:text-parchment hover:pl-5 active:scale-[0.98]"
              >
                <span>{l.label}</span>
                <svg
                  className="h-4 w-4 text-parchment/20 transition-all duration-200 group-hover:text-gold group-hover:translate-x-1"
                  fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" /> </svg>
              </a>
            </li>
          ))}
        </ul>{/* CTA */}
        <div className="px-4 pt-4"><a
          href="#booking"
          onClick={() => setOpen(false)}
          className="block rounded-full bg-gold px-5 py-3 text-center font-body text-sm font-bold text-navy-dark">
          Book Now
        </a>
        </div>
      </div>
    </>
  );
}