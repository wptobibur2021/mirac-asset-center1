import Image from "next/image";

const AvenueItem = ({ image, title }: AvenueSliderType) => {
  return (
    <div className="space-y-4 group scale-[0.80] hover:scale-100 transition-all duration-500 ease-in-out cursor-pointer hover:px-5">
      <div className="relative">
        <Image
          width={320}
          height={425}
          src={image}
          alt="avenue"
          className="w-full h-[425px] object-cover"
        />
        <div className="w-full absolute bottom-0 right-0 flex items-center">
          <div className="bg-[#F58220] w-[65%] py-2"></div>
          <div className="bg-[#00427A] w-[35%] py-2"></div>
        </div>
      </div>
      <p className="text-xl leading-[32px] font-bold text-[#BBBBBB] group-hover:text-white group-hover:leading-[48px] group-hover:text-[32px] transition-all duration-500 ease-in-out">
        {title}
      </p>
    </div>
  );
};

export default AvenueItem;
