import { BookText, Calendar, CircleArrowUp, Headset } from "lucide-react";
import SettingItem from "./SettingItem";

const Setting = () => {
  return (
    <div className="fixed bottom-40 right-2 flex flex-col gap-4">
      <SettingItem Icon={Headset} title="주요문의처" />
      <SettingItem Icon={BookText} title="임대문의" />
      <SettingItem Icon={Calendar} title="방문예약" />
      <SettingItem Icon={CircleArrowUp} title="TOP" />
    </div>
  );
};

export default Setting;
