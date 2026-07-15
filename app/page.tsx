import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PromoCarousel from "@/components/PromoCarousel";
import TrustStrip from "@/components/TrustStrip";
import PromoBoard from "@/components/PromoBoard";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Rentals from "@/components/Rentals";
import BookingSection from "@/components/BookingSection";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PromoCarousel />
      <TrustStrip />
      <BookingSection />
      <PromoBoard />
      <Services />
      <Destinations />
      <Rentals />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
