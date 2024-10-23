import BenefitSection from "@/components/partials/Benefit/BenefitSection";
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
    </div>
  );
};

export default HomePage;
