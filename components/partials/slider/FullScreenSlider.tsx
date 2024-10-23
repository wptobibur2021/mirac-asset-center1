"use client";
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
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src="/assets/images/slider/slider_1.svg"
            alt="slider"
            width={1920}
            height={1080}
          />
          <div className="container m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
              <h1 className="text-[80px] leading-[80px] font-bold flex text-white">
                The
                <span className="inline-block align-middle ml-2 h-[30px]">
                  <Image
                    src="/assets/images/slider/first.svg"
                    alt="emoji"
                    width={100}
                    height={100}
                    className="inline-block"
                  />
                </span>
                Environment you would imagine
              </h1>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/slider/slider_2.svg"
            alt="slider"
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <Image
            src="/assets/images/slider/slider_3.svg"
            alt="slider"
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <Image
            src="/assets/images/slider/slider_4.svg"
            alt="slider"
            width={1920}
            height={1080}
          />
        </div>
      </Slider>
    </div>
  );
};

export default FullScreenSlider;
