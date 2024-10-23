import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SliderItem = ({
  btnLink,
  btnText,
  image,
  subTitle,
  title,
}: SliderType) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={image}
        alt="slider"
        width={1920}
        height={1080}
        className="w-full h-[1080px] object-cover"
      />
      <div className="container m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-[300px]">
        <div className="w-[954px]">
          <h1 className="text-[80px] leading-[80px] font-bold text-white">
            {title}
            {/* <span className="flex items-center">
              {title}
              The
              <Image
                src="/assets/images/slider/first.svg"
                alt="emoji"
                width={100}
                height={100}
                className="inline-block ml-5 -mt-10"
              />
              Environment you
            </span>
            would imagine */}
          </h1>
        </div>
        <div className="w-[1045px] border-t-2 border-white py-5">
          <div className="space-y-5">
            <h2 className="text-xl leading-[32px] text-white font-bold text-justify">
              {subTitle}
            </h2>
            <Button
              variant={"outline"}
              className="mt-5 bg-transparent text-white border-white hover:bg-transparent hover:text-white"
              size={"lg"}
            >
              <Link className="flex items-center gap-2" href={btnLink}>
                {btnText} <ArrowRight />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
