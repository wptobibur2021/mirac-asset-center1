import AvenueSection from "@/components/partials/Avenue/AvenueSection";
import BenefitSection from "@/components/partials/Benefit/BenefitSection";
import EventSection from "@/components/partials/event/EventSection";
import FooterTop from "@/components/partials/footerTop/FooterTop";
import ServicesSection from "@/components/partials/service/ServicesSection";
import FullScreenSlider from "@/components/partials/slider/FullScreenSlider";

const HomePage = () => {
  return (
    <div>
      <ServicesSection />
      <FullScreenSlider />
      <BenefitSection />
      <EventSection />
      <AvenueSection />
      <FooterTop />
    </div>
  );
};

export default HomePage;
