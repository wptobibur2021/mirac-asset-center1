import HeroSection from "@/components/partials/hero/HeroSection";
import ServicesSection from "@/components/partials/service/ServicesSection";
import FullScreenSlider from "@/components/partials/slider/FullScreenSlider";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FullScreenSlider />
    </div>
  );
};

export default HomePage;
