import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <ul className="flex md:flex-row flex-col items-center gap-x-10 text-white">
        <MenuItem href="/" name="센터원" />
        <MenuItem href="/" name="이용안내" />
        <MenuItem href="/" name="서비스소개" />
        <MenuItem href="/" name="임대문의" />
        <MenuItem href="/" name="고객지원" />
      </ul>
    </div>
  );
};

export default Menu;
