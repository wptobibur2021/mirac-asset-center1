import { Services } from "@/lib/dummyData";
import ServiceItem from "./ServiceItem";

const ServicesSection = () => {
  return (
    <div className="bg-[#242424] text-white py-[80px] md:py-[160px] md:px-0 px-5">
      <div className="container m-auto">
        <div className="mb-10">
          <h2 className="md:text-[40px] text-xl md:leading-[64px] leading-8 font-bold md:mb-3">
            Convenience
          </h2>
          <p className="mb-6 md:text-[40px] md:leading-[64px] text-[20px] leading-8">
            미래에셋센터원에서 경험하는
            <span className="text-[#F58220]"> 특별한 서비스</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          {Services?.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
