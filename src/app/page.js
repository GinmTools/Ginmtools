import Header from "../components/Header";
import Hero from "../components/Hero";
import ClientMarquee from "../components/ClientMarquee";
import CatalogGrid from "../components/CatalogGrid";
import Heritage from "../components/Heritage";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientMarquee />
        <CatalogGrid />
        <Heritage />
        <TestimonialSlider />
      </main>
      <Footer />
    </>
  );
}
