import AboutSection from "./components/AboutSection";
import CampusSection from "./components/CampusSection";
import Carousel from "./components/Carousel";
import CTADaftar from "./components/CTADaftar";
import CTAKos from "./components/CTAKos";
import CTASurvey from "./components/CTASurvey";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/FooterSection";
import Hero from "./components/Hero";
import PromoKosSection from "./components/PromoKosSection";
import PromoSection from "./components/PromoSection";
import RecommendationSection from "./components/RecommendationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <CTADaftar />
      <CTASurvey />
      <CTAKos />
      <PromoSection />
      <RecommendationSection />
      <PromoKosSection />
      <CampusSection />
      <AboutSection />
      <FeatureSection />
      <Footer />
    </>
  );
}
