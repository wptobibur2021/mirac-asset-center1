import { Services } from "@/lib/dummyData";
import ServiceItem from "./ServiceItem";

const ServicesSection = () => {
  return (
    <div className="bg-[#242424] text-white py-[160px]">
      <div className="container m-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">Convenience</h2>
          <p className="mb-6 text-4xl">
            미래에셋센터원에서 경험하는
            <span className="text-[#F58220]"> 특별한 서비스</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Services?.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
