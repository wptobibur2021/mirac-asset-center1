import Image from "next/image";

const ServicesSection = () => {
  return (
    <div className="bg-[#242424] text-white p-8">
      <div className="container m-auto py-20">
        <h2 className="text-4xl font-bold mb-4">Convenience</h2>
        <p className="mb-6 text-4xl">
          미래에셋센터원에서 경험하는
          <span className="text-[#F58220]"> 특별한 서비스</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <Image
              src="/assets/images/service/service1.svg"
              alt="KF GALLERY"
              width={300}
              height={200}
              className="w-full"
            />
            <h3 className="text-xl font-semibold text-orange-500">
              KF GALLERY
            </h3>
            <p className="text-sm text-gray-300">
              국내외 명문계에게 전시회, 문화 행사, 교육 프로그램 등 개최
            </p>
            <p className="text-sm text-gray-300">
              국제 교류를 촉진하는 다양한 전시와 행사에 참여해보세요.
            </p>
            <div className="border-t border-orange-500 w-16 pt-2"></div>
          </div>
          <div className="space-y-4">
            <Image
              src="/assets/images/service/service2.svg"
              alt="Wellness Center"
              width={300}
              height={200}
              className="w-full"
            />
            <h3 className="text-xl font-semibold text-white">
              센터원 Wellness
            </h3>
            <p className="text-sm text-gray-300">
              피트니스, 골프GDR, 필라테스, GX스튜디오, 사우나, PT/그룹레슨
            </p>
            <p className="text-sm text-gray-300">테라피실 등 운영</p>
            <p className="text-sm text-gray-300">
              바쁜 일상과 업무에서 잠시 휴식을 취해보세요.
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src="/assets/images/service/service3.svg"
              alt="SPARKPLUS"
              width={300}
              height={200}
              className="w-full"
            />
            <h3 className="text-xl font-semibold text-white">SPARKPLUS</h3>
            <p className="text-sm text-gray-300">
              편하는 인원만큼 시용할 수 있는 맞춤형 오피스
            </p>
            <p className="text-sm text-gray-300">
              필요한 회의실 수 있는 완벽한 공유 오피스를 만나보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
