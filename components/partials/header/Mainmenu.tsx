import { Globe } from "lucide-react";
import Image from "next/image";
import MenuItem from "./MenuItem";

const Mainmenu = () => {
  return (
    <div>
      <div className="flex justify-between items-center container m-auto py-6">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={300}
          height={30}
        />
        <div>
          <ul className="flex items-center gap-x-10 text-white">
            <MenuItem href="/" name="센터원" />
            <MenuItem href="/" name="이용안내" />
            <MenuItem href="/" name="서비스소개" />
            <MenuItem href="/" name="임대문의" />
            <MenuItem href="/" name="고객지원" />
          </ul>
        </div>
        <div>
          <Globe size={24} className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;
