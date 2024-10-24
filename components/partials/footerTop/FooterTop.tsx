import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="bg-footerTopBg bg-cover bg-center bg-no-repeat py-[280px]">
      <div className="container m-auto flex items-center justify-center flex-col">
        <h1 className="md:text-[134px] text-5xl leading-[72px] font-bold md:leading-[200px] text-white shadow">
          MIRAE ASSET
        </h1>
        <Image
          src="/assets/images/center.svg"
          alt="footerTop"
          width={490}
          height={100}
          className="md:w-[490px] md:h-[100px] w-[190px]"
        />
      </div>
    </div>
  );
};

export default FooterTop;
