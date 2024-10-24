import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <ul className="flex md:flex-row flex-col md:items-center md:gap-x-10 gap-y-1  md:text-white text-gray-800">
        <MenuItem href="#home" name="센터원" />
        <MenuItem href="#service" name="서비스소개" />
        <MenuItem href="#benefit" name="고객지원" />
        <MenuItem href="#event" name="임대문의" />
        <MenuItem href="#avenue" name="이용안내" />
      </ul>
    </div>
  );
};

export default Menu;
