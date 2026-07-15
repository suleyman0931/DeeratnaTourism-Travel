"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-dark pb-16 pt-32 md:pb-20 md:pt-40"
    >
      {/* Horn of Africa route map + animated flight path (signature element) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,63,115,0.55),transparent_60%)]" />
        <svg
          className="absolute right-[-8%] top-10 h-[420px] w-[420px] opacity-[0.35] md:h-[560px] md:w-[560px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 10 C 60 15, 55 55, 62 80 C 68 105, 50 115, 45 140 C 40 165, 55 185, 80 190 C 95 193, 105 175, 100 155 C 96 140, 115 130, 120 105 C 125 78, 140 65, 150 40"
            stroke="#C99A3E"
            strokeWidth="0.6"
            opacity="0.5"
          />
        </svg>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Desktop path - original curved path */}
          <path
            id="route"
            d="M 90 380 Q 420 120 700 260 T 1130 140"
            fill="none"
            stroke="#C99A3E"
            strokeOpacity="0.55"
            strokeWidth="1.4"
            strokeDasharray="6 8"
            className="hidden animate-flight-path md:block"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          />
          
          {/* Mobile path - dramatic S-curve design from bottom-left sweeping across to top-right */}
          <path
            id="route-mobile"
            d="M 100 480 Q 180 420 250 340 Q 320 260 420 200 Q 520 140 650 100 Q 780 60 950 40"
            fill="none"
            stroke="#C99A3E"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="block animate-flight-path md:hidden"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          />
          
          {/* Desktop markers */}
          <g className="hidden md:block">
            <circle cx="90" cy="380" r="4" fill="#C99A3E" />
            <circle cx="1130" cy="140" r="4" fill="#F6F1E7" />

            {/* Origin label */}
            <text x="60" y="404" fill="#F6F1E7" fontSize="15" fontWeight="700" fontFamily="var(--font-jetbrains)" opacity="0.95">
              ADD
            </text>
            <text x="60" y="420" fill="#F6F1E7" fontSize="10" fontFamily="var(--font-jetbrains)" opacity="0.6">
              Addis Ababa
            </text>

            {/* Destination label */}
            <text x="1060" y="122" fill="#F6F1E7" fontSize="15" fontWeight="700" fontFamily="var(--font-jetbrains)" opacity="0.95">
              DXB
            </text>
            <text x="1060" y="138" fill="#F6F1E7" fontSize="10" fontFamily="var(--font-jetbrains)" opacity="0.6">
              Dubai
            </text>
          </g>
          
          {/* Mobile markers */}
          <g className="block md:hidden">
            <circle cx="100" cy="480" r="5" fill="#C99A3E" opacity="0.8" />
            <circle cx="950" cy="40" r="5" fill="#F6F1E7" opacity="0.9" />

            {/* Origin label - bottom left */}
            <text x="70" y="505" fill="#F6F1E7" fontSize="12" fontWeight="700" fontFamily="var(--font-jetbrains)" opacity="0.9">
              ADD
            </text>

            {/* Destination label - top right */}
            <text x="920" y="30" fill="#F6F1E7" fontSize="12" fontWeight="700" fontFamily="var(--font-jetbrains)" opacity="0.9">
              DXB
            </text>
          </g>

          {/* Desktop Plane */}
          <g fill="#F6F1E7" className="hidden md:block">
            <path
              d="M0 -8 L2.6 -2 L11 1.5 L11 3.3 L2.4 1.6 L1 7.5 L4 9.6 L4 11 L0 9.8 L-4 11 L-4 9.6 L-1 7.5 L-2.4 1.6 L-11 3.3 L-11 1.5 L-2.6 -2 Z"
              transform="rotate(90) scale(1.6)"
            />
            <animateMotion
              dur="3.5s"
              repeatCount="indefinite"
              rotate="auto"
              path="M 90 380 Q 420 120 700 260 T 1130 140"
              keyPoints="0;0;1;1"
              keyTimes="0;0.02;0.94;1"
              calcMode="linear"
            />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="3.5s" repeatCount="indefinite" />
          </g>
          
          {/* Mobile Plane - dramatic S-curve design sweeping across screen */}
          <g fill="#F6F1E7" className="block md:hidden">
            <path
              d="M0 -8 L2.6 -2 L11 1.5 L11 3.3 L2.4 1.6 L1 7.5 L4 9.6 L4 11 L0 9.8 L-4 11 L-4 9.6 L-1 7.5 L-2.4 1.6 L-11 3.3 L-11 1.5 L-2.6 -2 Z"
              transform="rotate(90) scale(1.6)"
            />
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              rotate="auto"
              path="M 100 480 Q 180 420 250 340 Q 320 260 420 200 Q 520 140 650 100 Q 780 60 950 40"
              keyPoints="0;0;1;1"
              keyTimes="0;0.02;0.94;1"
              calcMode="linear"
            />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="4.5s" repeatCount="indefinite" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-gold">
            Licensed Ethiopian Travel Agency
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-parchment sm:text-5xl md:text-6xl lg:text-7xl">
            Ethiopia to the world,
            <span className="block italic text-gold">one booking away.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-parchment/85 md:text-lg lg:text-xl">
            Deeratna Tourism and Travel arranges flights, hotels, guided tours, guest
            house and villa rentals, and Umrah visa support for travelers
            moving between Ethiopia, the Gulf and beyond.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-gold px-7 py-3.5 font-body text-sm font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
            >
              Start a Booking
            </a>
            <a
              href="#services"
              className="rounded-full border border-parchment/25 px-7 py-3.5 font-body text-sm font-semibold text-parchment transition-colors hover:border-gold hover:text-gold"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
