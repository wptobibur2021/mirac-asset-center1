import { Benefits } from "@/lib/dummyData";
import Image from "next/image";
import BenefitItem from "./BenefitItem";

const BenefitSection = () => {
  return (
    <div className="bg-[#242424] text-white py-[80px] md:pt-[180px] md:pb-[240px] md:px-0 px-5">
      <div className="container m-auto">
        <div className="space-y-3 pb-[80px] md:pb-[120px]">
          <div className="flex items-center gap-4">
            <h2 className="md:text-[40px] md:leading-[64px] text-[20px] leading-8 font-bold">
              ONLY
            </h2>
            <Image
              src="/assets/images/center.svg"
              alt="benefit"
              width={200}
              height={44}
              className="md:w-[200px] h-[44px] w-[110px]"
            />
          </div>
          <p className="mb-6 md:text-[40px] md:leading-[64px] text-[20px] leading-8">
            미래에셋센터원에서만 누리는
            <span className="text-[#F58220]"> 특별한 혜택</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Benefits?.map((benefit) => (
            <BenefitItem key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
