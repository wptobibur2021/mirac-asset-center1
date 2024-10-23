import BenefitSection from "@/components/partials/Benefit/BenefitSection";
import FooterTop from "@/components/partials/footerTop/FooterTop";
import HeroSection from "@/components/partials/hero/HeroSection";
import ServicesSection from "@/components/partials/service/ServicesSection";
import FullScreenSlider from "@/components/partials/slider/FullScreenSlider";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FullScreenSlider />
      <BenefitSection />
      <FooterTop />
    </div>
  );
};

export default HomePage;
