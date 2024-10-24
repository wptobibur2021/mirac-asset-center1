import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <ul className="flex md:flex-row flex-col items-center md:gap-x-10 gap-y-3 text-gray-800  md:text-white">
        <MenuItem href="/" name="센터원" />
        <MenuItem href="#avenue" name="이용안내" />
        <MenuItem href="#service" name="서비스소개" />
        <MenuItem href="#event" name="임대문의" />
        <MenuItem href="#benefit" name="고객지원" />
      </ul>
    </div>
  );
};

export default Menu;
