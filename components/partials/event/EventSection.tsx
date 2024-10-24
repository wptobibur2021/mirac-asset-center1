import { CirclePlus } from "lucide-react";
import EventSlider from "./EventSlider";

const EventSection = () => {
  return (
    <div className="py-[160px] bg-[#ECEFF1]">
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <EventSlider />
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-[40px] leading-[64px] font-bold text-[#2C2C2C]">
              센터원 소식
            </h2>
            <CirclePlus size={32} className="text-[#2C2C2C] cursor-pointer" />
          </div>
          <div className="space-y-1">
            <h1 className="font-bold text-[28px] leading-[45px] text-[#00427A]">
              미래에셋센터원 홈페이지 리뉴얼 안내
            </h1>
            <p className="text-[#00427A] text-xl leading-[32px] mb-5">
              미래에셋센터원 공식 홈페이지가 리뉴얼 오픈했습니다. 더 나은 서비스
              제공을 위해 불편한...
            </p>
            <p className="text-[#00427A] text-base leading-[28px]">
              2024.09.04(수)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
