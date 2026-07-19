import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LuxuryStory from "@/components/LuxuryStory";
import FeaturedCollections from "@/components/FeaturedCollections";
import Craftsmanship from "@/components/Craftsmanship";
import PremiumMaterials from "@/components/PremiumMaterials";
import DesignerPicks from "@/components/DesignerPicks";
import FeaturedInterior from "@/components/FeaturedInterior";
import Testimonials from "@/components/Testimonials";
import BookConsultation from "@/components/BookConsultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DesignerPicks />
        <LuxuryStory />
        <FeaturedCollections />
        <Craftsmanship />
        <PremiumMaterials />
        <FeaturedInterior />
        <Testimonials />
        <BookConsultation />
      </main>
      <Footer />
    </>
  );
}
