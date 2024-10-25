import { LucideIcon } from "lucide-react";

const SettingItem = ({ Icon, title }: { Icon: LucideIcon; title: string }) => {
  return (
    <div className="bg-[#FFFFFF] rounded md:rounded-[8px] p-2 md:py-[12px] md:px-[14px] flex flex-col items-center md:gap-1 group cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#00427A] border-2 border-[#00427A]">
      <Icon
        className="text-[#00427A] group-hover:text-white md:w-8 w-5"
        size={32}
      />
      <p className="text-[#00427A] font-bold text-xs leading-5 md:text-sm md:leading-6 group-hover:text-white">
        {title}
      </p>
    </div>
  );
};

export default SettingItem;
