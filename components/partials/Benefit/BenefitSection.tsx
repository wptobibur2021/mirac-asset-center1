import { Benefits } from "@/lib/dummyData";
import Image from "next/image";
import BenefitItem from "./BenefitItem";

const BenefitSection = () => {
  return (
    <div className="bg-[#242424] text-white pt-[180px] pb-[240px]">
      <div className="container m-auto">
        <div className="space-y-3 pb-[120px]">
          <div className="flex items-center gap-5">
            <h2 className="text-[40px] leading-[64px] font-bold">ONLY</h2>
            <Image
              src="/assets/images/center.svg"
              alt="benefit"
              width={200}
              height={44}
            />
          </div>
          <p className="mb-6 text-4xl">
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
