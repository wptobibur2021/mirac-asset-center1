import { CirclePlus } from "lucide-react";
import EventSlider from "./EventSlider";

const EventSection = () => {
  return (
    <div
      className="md:py-[160px] py-[80px] bg-[#ECEFF1] md:px-0 px-5"
      id="event"
    >
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <EventSlider />
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="md:text-[40px] md:leading-[64px] text-2xl leading-[36px] font-bold text-[#2C2C2C]">
              센터원 소식
            </h2>
            <CirclePlus className="text-[#2C2C2C] cursor-pointer md:w-[32px] w-[24px]" />
          </div>
          <div className="space-y-1">
            <h1 className="text-[#2C2C2C] text-lg leading-[28px] md:text-[32px] md:leading-[48px] font-bold mb-2">
              미래에셋센터원 홈페이지 리뉴얼 안내
            </h1>
            <p className="text-[#979797] text-sm leading-6 md:text-xl md:leading-[32px] mb-5">
              미래에셋센터원 공식 홈페이지가 리뉴얼 오픈했습니다. 더 나은 서비스
              제공을 위해 불편한...
            </p>
            <p className="text-[#979797] text-base leading-[28px]">
              2024.09.04(수)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
