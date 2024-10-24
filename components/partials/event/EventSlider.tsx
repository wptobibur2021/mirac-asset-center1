"use client";
import ArrowButtonSlider from "@/components/ui/ArrowButtonSlider";
import { EventSliders } from "@/lib/dummyData";
import { sliderSetting } from "@/lib/sliderSetting";
import { CirclePlus } from "lucide-react";
import Slider from "react-slick";
import EventSliderItem from "./EventSliderItem";

const EventSlider = () => {
  const eventSlider = {
    ...sliderSetting,
    dots: false,
    arrows: true,
    className: "event-slider",
    nextArrow: <ArrowButtonSlider isRight={true} position="right-5" />,
    prevArrow: <ArrowButtonSlider isLeft={true} position="left-5" />,
  };
  return (
    <div className="w-full space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] leading-[64px] font-bold text-[#2C2C2C]">
          지금 살펴봐야할 이벤트
        </h2>
        <CirclePlus size={32} className="text-[#2C2C2C] cursor-pointer" />
      </div>
      <Slider {...eventSlider}>
        {EventSliders?.map((slider) => (
          <EventSliderItem key={slider.id} {...slider} />
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
