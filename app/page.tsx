import Hero from "@/components/HeroSection/Hero";
import Offer from "@/components/OfferSection/Offer";
import Product from "@/components/ProductSection/Product";
import Contact from "@/components/ContactSection/Contact";
import Navigation from "@/layout/Navigation/Navigation";
import Footer from "@/layout/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Offer />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}
