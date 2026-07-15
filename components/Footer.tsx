import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 pb-12 md:pb-14 md:px-10">
        {/* Logo and description - Full width on mobile */}
        <div className="mb-10 md:mb-0">
          <div className="flex items-center gap-3">
            <Image src="/logo-white.png" alt="Deeratna Tourism and Travel" width={40} height={37} className="h-9 w-auto" />
            <span className="font-display text-lg font-semibold text-parchment">Deeratna</span>
          </div>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-parchment/60 md:mt-4">
            A licensed tourism and travel agency arranging flights, hotels, tours and
            Umrah support between Ethiopia and the world.
          </p>
        </div>

        {/* Grid layout: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 gap-8 border-b border-parchment/10 pb-12 md:grid-cols-3 md:gap-12 md:pb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Explore</p>
            <ul className="mt-3 space-y-2 md:mt-4 md:space-y-2.5">
              {[
                ["Services", "#services"],
                ["Destinations", "#destinations"],
                ["Guest Houses & Villas", "#rentals"],
                ["Promotions", "#promotions"],
                ["Book a trip", "#booking"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="font-body text-sm text-parchment/70 hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Contact</p>
            <ul className="mt-3 space-y-2 font-body text-sm text-parchment/70 md:mt-4 md:space-y-2.5">
              <li>Bole Road, Addis Ababa, Ethiopia</li>
              <li>
                <a href="tel:+251911000000" className="hover:text-gold">
                  +251 91 100 0000
                </a>
              </li>
              <li>
                <a href="mailto:booking@deeratnatravel.com" className="hover:text-gold">
                  booking@deeratnatravel.com
                </a>
              </li>
              <li>Sun–Fri, 8:00–19:00 EAT</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Follow</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-body text-sm text-parchment/70 md:mt-4">
              <li><a href="#" className="hover:text-gold">Facebook</a></li>
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">Telegram</a></li>
              <li><a href="#" className="hover:text-gold">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 md:flex-row">
          <p className="font-body text-xs text-parchment/40">
            © {new Date().getFullYear()} Deeratna Tourism and Travel. All rights reserved.
          </p>
          <p className="font-body text-xs text-parchment/40">ዲረትና ቱር እንድ ትራቭል · ديرتنا للسياحة والسفريات</p>
        </div>
      </div>
    </footer>
  );
}
