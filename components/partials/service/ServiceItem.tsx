import Image from "next/image";

const ServiceItem = ({ id, image, title, subTitle }: ServiceType) => {
  return (
    <div
      className={`space-y-4 group cursor-pointer ${id === 1 && "pt-[120px]"} ${
        id === 2 && "pt-[60px]"
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-[500px] h-[300px] object-cover"
      />
      <h3 className="text-[40px] leading-[64px] font-semibold text-white group-hover:text-[#F58220] transition-all duration-500 ease-in-out">
        {title}
      </h3>
      <p className="text-lg leading-[32px] text-[#7D7D7D] text-justify">
        {subTitle}
      </p>
      <div className="flex items-center">
        <div className="border-t-4 border-[#F58220] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
        <div className="border-t-2 border-[#575757] w-full"></div>
      </div>
    </div>
  );
};

export default ServiceItem;
