"use client";
import { Sliders } from "@/lib/dummyData";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
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
        {Sliders?.map((slider) => (
          <SliderItem key={slider.id} {...slider} />
        ))}
      </Slider>
    </div>
  );
};

export default FullScreenSlider;
