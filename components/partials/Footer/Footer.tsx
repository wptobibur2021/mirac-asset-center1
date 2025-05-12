import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#242424] py-[80px] text-white md:px-0 px-5">
      <div className="container m-auto">
        <div className="flex justify-between md:gap-0 gap-5">
          <div className="space-y-5 flex flex-col justify-between">
            <div className="space-y-2 pb-[200px]">
              <Link className="cursor-pointer" href="#home">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={260}
                  height={35}
                  className="mb-4"
                />
              </Link>
              <div className="md:block hidden">
                <p>
                  주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시
                  중구 을지로 5길 26 )
                </p>
                <p>대표번호 : 02-6030-0100</p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-8 md:items-start items-end">
            <p>개인정보처리방침</p>
            <div className="flex flex-col gap-5">
              <select className="bg-[#242424] focus:outline-none focus-visible:outline-none rounded-full py-2 px-5 border border-white">
                <option>FAMILY SITE</option>
                <option>FAMILY SITE</option>
              </select>
              <Button className="border border-[#DDDDDD] rounded-md bg-[#242424]">
                미래에셋
              </Button>
            </div>
          </div>
        </div>
        <div className="block md:hidden space-y-5 mb-7">
          <p className="text-xs leading-[22px]">
            주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시 중구
            을지로 5길 26 )
          </p>
          <p className="text-xs leading-[22px]">대표번호 : 02-6030-0100</p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center md:justify-between md:gap-0 gap-5">
          <p className="text-xs leading-[22px] md:text-base">
            COPYRIGHT(C) 2011 MIRAE ASSET COPORATION. CO., Ltd. ALL RIGHT
            RESERVED.
          </p>
          <p className="text-xs leading-[22px] md:text-xl">
            Design by{" "}
            <Link href="https://tobibur.me" target="_blank">
              Tobibur
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
