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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full py-[80px] md:py-[160px] bg-[#242424]" id="avenue">
      <div className="flex justify-between items-end pb-[40px] md:pb-[130px]">
        <Image
          src={"/assets/images/shapeLeft.svg"}
          alt="avenue"
          width={640}
          height={45}
          className="w-[640px] md:block hidden"
        />
        <Image
          src={"/assets/images/mShapeLeft.png"}
          alt="avenue"
          width={40}
          height={40}
          className="w-[40px] block md:hidden"
        />
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/center.svg"
            alt="avenue"
            width={200}
            height={45}
            className="md:w-[200px] w-[120px]"
          />
          <h1 className="md:text-[40px] md:leading-[64px] text-[24px] leading-[36px] font-bold text-white">
            미래에셋센터원 <span className="text-[#F58220]">AVENUE</span>
          </h1>
        </div>
        <Image
          src={"/assets/images/mShapeRight.png"}
          alt="avenue"
          width={40}
          height={40}
          className="w-[40px] block md:hidden"
        />
        <Image
          src={"/assets/images/shapeRight.svg"}
          alt="avenue"
          width={640}
          height={45}
          className="w-[640px] md:block hidden"
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
