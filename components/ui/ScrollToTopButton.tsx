"use client";

import { CircleArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`bg-[#FFFFFF] rounded md:rounded-[8px] p-2 md:py-[12px] md:px-[14px] flex flex-col items-center md:gap-1 group cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#00427A] border-2 border-[#00427A] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleScrollToTop}
    >
      <CircleArrowUp
        className="text-[#00427A] group-hover:text-white md:w-8 w-5"
        size={32}
      />
      <p className="text-[#00427A] font-bold text-xs leading-5 md:text-sm md:leading-6 group-hover:text-white">
        TOP
      </p>
    </div>
  );
};

export default ScrollToTopButton;
