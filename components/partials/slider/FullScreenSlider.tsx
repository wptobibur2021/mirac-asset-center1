"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
const FullScreenSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "full-screen-slider",
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative w-full overflow-hidden">
          <Image
            src="/assets/images/slider/slider_1.svg"
            alt="slider"
            width={1920}
            height={1080}
            className="w-full h-[1080px] object-cover"
          />
          <div className="container m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-[300px]">
            {/* <div className="relative z-20 flex items-center justify-center h-full">
              <div className="max-w-6xl px-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  The
                  <span className="inline-block relative mx-2">
                    <span className="text-white">1</span>
                    <sup className="absolute top-0 right-0 text-2xl md:text-3xl lg:text-4xl text-white">
                      st
                    </sup>
                  </span>
                  Environment you would imagine
                </h1>
              </div>
            </div> */}
            <div className="w-[954px]">
              <h1 className="text-[80px] leading-[80px] font-bold text-white">
                <span className="flex items-center">
                  The
                  <Image
                    src="/assets/images/slider/first.svg"
                    alt="emoji"
                    width={100}
                    height={100}
                    className="inline-block"
                  />
                  Environment you
                </span>
                would imagine
              </h1>
            </div>
            <div className="w-[1045px] border-t-2 border-white py-5">
              <div className="space-y-5">
                <h2 className="text-xl leading-[32px] text-white font-bold text-justify">
                  서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과
                  퇴근길에 만나는 청계천의 여유로움은 CENTER1 입주자 및 이용객이
                  누릴 수 있는 특권입니다. 이용자를 위한 감성적인 요소뿐만
                  아니라, 국내 최고 수준의 친환경 기준을 실천하여 국내외에서
                  친환경 건축물로 인증받았습니다.
                </h2>
                <Button
                  variant={"outline"}
                  className="mt-5 bg-transparent text-white border-white hover:bg-transparent hover:text-white"
                  size={"lg"}
                >
                  View more <ArrowRight />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/slider/slider_2.svg"
            alt="slider"
            width={1920}
            height={1080}
            className="w-full h-[1080px] object-cover"
          />
        </div>
        <div>
          <Image
            src="/assets/images/slider/slider_3.svg"
            alt="slider"
            width={1920}
            height={1080}
            className="w-full h-[1080px] object-cover"
          />
        </div>
        <div>
          <Image
            src="/assets/images/slider/slider_4.svg"
            alt="slider"
            width={1920}
            height={1080}
            className="w-full h-[1080px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default FullScreenSlider;
