import Image from "next/image";
import Menu from "../partials/header/Menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "./sheet";

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={300}
            height={30}
            className="md:w-[300px] h-[30px] w-[150px]"
          />
        </SheetHeader>
        <SheetDescription>
          <Menu />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
