import Image from "next/image";
import Mainmenu from "../header/Mainmenu";

const HeroSection = () => {
  return (
    <div className="bg-heroBg bg-bottom bg-cover w-full">
      <div className="container m-auto md:px-0 px-5">
        <Mainmenu />
        <div className="md:pt-[216px] pt-[364px] md:pb-[256px] pb-[85px]">
          <div className="md:w-[655px] w-full space-y-6 md:space-y-20">
            <Image
              src="/assets/images/HeadTitle.svg"
              alt="headeTitl"
              width={655}
              height={273}
              className="md:w-[655px] md:h-[273px] w-full h-[118px] -ml-7 md:-ml-0"
            />
            <div className="text-white space-y-[18px]">
              <h1 className="md:text-[32px] text-sm leading-[24px] font-bold">
                최고의 공간을 경험하세요
              </h1>
              <h2 className="md:text-xl text-xs leading-[24px]">
                국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
