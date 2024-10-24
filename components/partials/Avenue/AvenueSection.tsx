"use client";
import { AvenueSliders } from "@/lib/dummyData";
import { sliderSetting } from "@/lib/sliderSetting";
import Image from "next/image";
import Slider from "react-slick";
import AvenueItem from "./AvenueItem";

const AvenueSection = () => {
  const settings = {
    ...sliderSetting,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "avenue-slider",
  };
  return (
    <div className="w-full py-[160px] bg-[#242424]">
      <div className="flex justify-between items-end pb-[130px]">
        <Image
          src={"/assets/images/shapeLeft.svg"}
          alt="avenue"
          width={640}
          height={45}
        />
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/center.svg"
            alt="avenue"
            width={200}
            height={45}
          />
          <h1 className="text-[40px] leading-[64px] font-bold text-white">
            미래에셋센터원 <span className="text-[#F58220]">AVENUE</span>
          </h1>
        </div>
        <Image
          src={"/assets/images/shapeRight.svg"}
          alt="avenue"
          width={640}
          height={45}
        />
      </div>
      <Slider {...settings}>
        {AvenueSliders?.map((slider) => (
          <AvenueItem key={slider.id} {...slider} />
        ))}
      </Slider>
    </div>
  );
};

export default AvenueSection;
