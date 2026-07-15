import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deeratna Tourism and Travel | Flights, Hotels, Tours & Umrah from Ethiopia",
  description:
    "Book flights, hotels, tour packages and Umrah/visa assistance with Deeratna Tourism and Travel — a trusted travel partner connecting Ethiopia to the world.",
  keywords: [
    "Deeratna Tourism and Travel",
    "Ethiopia travel agency",
    "flight booking Ethiopia",
    "Umrah packages",
    "Addis Ababa tour operator",
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Deeratna Tourism and Travel",
    description:
      "Flights, hotels, tour packages and Umrah/visa assistance — booked with a trusted partner connecting Ethiopia to the world.",
    type: "website",
    images: ['/logo-full.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
