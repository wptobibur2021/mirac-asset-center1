import Link from "next/link";

const MenuItem = ({ href, name }: MenuItemType) => {
  return (
    <li className="menuItem text-white">
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default MenuItem;
