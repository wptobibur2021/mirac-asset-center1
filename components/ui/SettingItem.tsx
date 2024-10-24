import { LucideIcon } from "lucide-react";

const SettingItem = ({ Icon, title }: { Icon: LucideIcon; title: string }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[8px] py-[12px] px-[14px] flex flex-col items-center gap-1 group cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#00427A] border-2 border-[#00427A]">
      <Icon className="text-[#00427A] group-hover:text-white" size={32} />
      <p className="text-[#00427A] font-bold text-sm leading-6 group-hover:text-white">
        {title}
      </p>
    </div>
  );
};

export default SettingItem;
