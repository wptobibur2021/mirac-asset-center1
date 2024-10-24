import { ArrowLeft, ArrowRight } from "lucide-react";

const ArrowButtonSlider = ({
  onClick,
  isLeft,
  isRight,
  position,
}: ArrowSliderControlType) => {
  return (
    <div
      className={`translate -translate-y-1/2 cursor-pointer text-white rounded-full absolute top-1/2 bg-[#ffffff99] z-20 md:w-12 w-8 h-8 md:h-12 flex items-center justify-center ${position}`}
      onClick={onClick}
    >
      {isRight && <ArrowRight className="text-[#2C2C2C] md:w-6 w-3" />}
      {isLeft && <ArrowLeft className="text-[#2C2C2C] md:w-6 w-3" />}
    </div>
  );
};

export default ArrowButtonSlider;
