# Deeratna Tourism and Travel — Landing Page

A front-end-only Next.js 14 (App Router) + TypeScript + Tailwind landing page for
Deeratna Tourism and Travel: flights, hotels, tour packages, and Umrah/visa assistance.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build/dev start
(Next.js downloads the Google Fonts — Fraunces, Manrope, JetBrains Mono — at build time).

## Build for production

```bash
npm run build
npm run start
```

## What's included

- **Hero** with an animated flight-path route and an overlapping quick-search bar.
- **Departures Board** — the moving promotions section (`components/PromoBoard.tsx`).
  It's a CSS-animated, seamlessly looping list styled like an airport board; it pauses
  on hover/focus and respects `prefers-reduced-motion`. Edit the `PROMOS` array in that
  file to change routes, prices, and tags.
- **Services, Destinations, Testimonials** — content sections, all editable via the
  arrays/constants at the top of each component file.
- **Booking form** (`components/BookingForm.tsx`) — this is front-end only. On submit
  it validates the fields and shows a simulated confirmation with a reference number.
  No data is sent anywhere yet. To make it live, replace the `window.setTimeout(...)`
  block with a real request, for example:

  ```ts
  const res = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tripType, name, ...otherFields }),
  });
  ```

  and add a corresponding API route (`app/api/bookings/route.ts`) or point it at your
  booking system / CRM.

## Editing content

- Contact details, address, and social links: `components/Footer.tsx`
- Stats strip numbers: `components/TrustStrip.tsx`
- Destination photos: `components/Destinations.tsx` (currently using royalty-free
  Unsplash URLs — replace with your own photography for production)
- Brand colors/fonts: `tailwind.config.ts`
- Logo: `public/logo.png` (transparent, optimized) and `public/logo-full.png` (original)

## Notes

- No backend, database, or payment processing is included — this is the front end only,
  as requested. The booking form is ready to be wired to a real API.
- Images use `next/image`; the Unsplash domain is allow-listed in `next.config.mjs`.
