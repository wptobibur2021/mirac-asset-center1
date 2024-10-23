import Image from "next/image";

const ServicesSection = () => {
  return (
    <div className="bg-[#242424] text-white py-[160px]">
      <div className="container m-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">Convenience</h2>
          <p className="mb-6 text-4xl">
            미래에셋센터원에서 경험하는
            <span className="text-[#F58220]"> 특별한 서비스</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4 pt-[120px]">
            <Image
              src="/assets/images/service/service1.svg"
              alt="KF GALLERY"
              width={500}
              height={300}
              className="w-[500px] h-[300px] object-cover"
            />
            <h3 className="text-[40px] leading-[64px] font-semibold text-[#F58220]">
              KF GALLERY
            </h3>
            <p className="text-lg leading-[32px] text-[#7D7D7D] text-justify">
              국내외 방문객에게 전시회, 문화 행사, 교육 프로그램 등 개최 국제
              교류를 촉진하는 다양한 전시와 행사에 참여해보세요.
            </p>
            <div className="flex items-center">
              <div className="border-t-4 border-[#F58220] w-full"></div>
              <div className="border-t-2 border-[#575757] w-full"></div>
            </div>
          </div>
          <div className="space-y-4 pt-[60px]">
            <Image
              src="/assets/images/service/service2.svg"
              alt="Wellness Center"
              width={500}
              height={300}
              className="w-[500px] h-[300px] object-cover"
            />
            <h3 className="text-[40px] leading-[64px] font-semibold text-white">
              센터원 Wellness
            </h3>
            <p className="text-lg text-[#7D7D7D] leading-[32px] text-justify">
              피트니스, 골프GDR+, 필라테스, GX,스피닝, 사우나,
              PT(퍼스널트레이닝) 등 운영 바쁜 일상과 업무에서 잠시 휴식을
              취해보.
            </p>
            <div className="border-t-2 border-[#575757] w-full"></div>
          </div>
          <div className="space-y-4">
            <Image
              src="/assets/images/service/service3.svg"
              alt="SPARKPLUS"
              width={500}
              height={300}
              className="w-[500px] h-[300px] object-cover"
            />
            <h3 className="text-[40px] leading-[64px] font-semibold text-white">
              SPARKPLUS
            </h3>
            <p className="text-lg text-[#7D7D7D] leading-[32px] text-justify">
              원하는 인원만큼 사용할 수 있는 맞춤형 오피스 일에만 집중할 수 있는
              완벽한 공유 오피스를 만나보세요.
            </p>
            <div className="border-t-2 border-[#575757] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
