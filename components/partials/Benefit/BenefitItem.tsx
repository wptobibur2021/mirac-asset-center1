import Image from "next/image";

const BenefitItem = ({ id, image, title, subTitle }: ServiceType) => {
  return (
    <div
      className={`space-y-4 group  cursor-pointer ${id !== 1 && "pt-[40px]"}`}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-[500px] h-[300px] object-cover"
      />
      <h3 className="text-[32px] leading-[48px] font-bold text-white group-hover:text-[#F58220] transition-all duration-500 ease-in-out">
        {title}
      </h3>
      <p className="text-lg leading-[32px] text-[#BBBBBB] group-hover:text-white text-justify transition-all duration-500 ease-in-out">
        {subTitle}
      </p>
    </div>
  );
};

export default BenefitItem;
