"use client";
import MobileMenu from "@/components/ui/MobileMenu";
import { Globe, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Mainmenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  console.log("isVisible", isVisible);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` ${
        isVisible && "bg-[#00427A]"
      } transition-all duration-700 ease-in-out fixed z-50 w-full m-auto top-0 left-0 right-0  md:px-0 px-5`}
    >
      <div className="flex justify-between items-center container m-auto py-6">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={300}
          height={30}
          className="md:w-[300px] h-[30px] w-[150px]"
        />
        <div className="md:block hidden">
          <Menu />
        </div>
        <div onClick={() => setShowMenu(!showMenu)} className="block md:hidden">
          <MenuIcon size={24} className="text-white cursor-pointer" />
        </div>
        <MobileMenu isOpen={showMenu} setIsOpen={setShowMenu} />
        <div className="md:block hidden">
          <Globe size={24} className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;
