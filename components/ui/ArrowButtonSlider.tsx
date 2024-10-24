import { ArrowLeft, ArrowRight } from "lucide-react";

const ArrowButtonSlider = ({
  onClick,
  isLeft,
  isRight,
  position,
}: ArrowSliderControlType) => {
  return (
    <div
      className={`translate -translate-y-1/2 cursor-pointer text-white rounded-full absolute top-1/2 bg-[#ffffff99] z-20 w-12 h-12 flex items-center justify-center ${position}`}
      onClick={onClick}
    >
      {isRight && <ArrowRight size={24} className="text-[#2C2C2C]" />}
      {isLeft && <ArrowLeft size={24} className="text-[#2C2C2C]" />}
    </div>
  );
};

export default ArrowButtonSlider;
