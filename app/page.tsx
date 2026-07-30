import Carousel from "./components/Carousel";
import CTADaftar from "./components/CTADaftar";
import CTAKos from "./components/CTAKos";
import CTASurvey from "./components/CTASurvey";
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
    </>
  );
}
