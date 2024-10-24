import Image from "next/image";

const BenefitItem = ({ id, image, title, subTitle }: ServiceType) => {
  return (
    <div
      className={`space-y-4 group  cursor-pointer ${
        id !== 1 && "md:pt-[40px]"
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-[300px] object-cover"
      />
      <h3 className="md:text-[32px] md:leading-[48px] text-[20px] leading-8 font-bold text-white group-hover:text-[#F58220] transition-all duration-500 ease-in-out">
        {title}
      </h3>
      <p className="md:text-lg md:leading-[32px] text-base leading-[28px] text-[#BBBBBB] group-hover:text-white text-justify transition-all duration-500 ease-in-out">
        {subTitle}
      </p>
    </div>
  );
};

export default BenefitItem;
