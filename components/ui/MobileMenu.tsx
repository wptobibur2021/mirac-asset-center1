import Mainmenu from "../partials/header/Mainmenu";
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
          <h1>Logo</h1>
        </SheetHeader>
        <SheetDescription>
          <Mainmenu />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
