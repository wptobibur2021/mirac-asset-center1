import Image from "next/image";

const EventSliderItem = ({
  image,
  title,
  eventItem,
  date,
}: EventSliderType) => {
  return (
    <div className="space-y-5">
      <Image
        src={image}
        alt={title}
        width={740}
        height={445}
        className="w-full md:h-[445px] h-[228px]"
      />
      <div>
        <h2 className="text-[#2C2C2C] text-lg leading-[28px] md:text-[32px] md:leading-[48px] font-bold mb-2">
          {title}
        </h2>
        <ul className="text-[#979797] space-y-1 text-sm md:text-xl mb-6">
          {eventItem?.map((item) => (
            <li key={item.id}>- {item.title}</li>
          ))}
        </ul>
        <p className="text-[#979797] md:text-lg text-xs">{date}</p>
      </div>
    </div>
  );
};

export default EventSliderItem;
