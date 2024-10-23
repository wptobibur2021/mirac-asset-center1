import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="bg-footerTopBg bg-cover bg-center bg-no-repeat py-[280px]">
      <div className="container m-auto flex items-center justify-center flex-col">
        <h1 className="text-[134px] font-bold leading-[200px] text-white shadow">
          MIRAE ASSET
        </h1>
        <Image
          src="/assets/images/center.svg"
          alt="footerTop"
          width={490}
          height={100}
          className="w-[490px] h-[100px] object-cover"
        />
      </div>
    </div>
  );
};

export default FooterTop;
