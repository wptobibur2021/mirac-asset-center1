import Image from "next/image";
import Mainmenu from "../header/Mainmenu";

const HeroSection = () => {
  return (
    <div className="bg-heroBg bg-bottom bg-no-repeat h-[100vh]">
      <div className="container m-auto">
        <Mainmenu />
        <div className="pt-[150px] pb-[145px]">
          <div className="w-[655px] space-y-20">
            <Image
              src="/assets/images/HeadTitle.png"
              alt="headeTitl"
              width={655}
              height={273}
            />
            <div className="text-white space-y-[18px]">
              <h1 className="text-[32px] font-bold">
                최고의 공간을 경험하세요
              </h1>
              <h2 className="text-xl">
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
