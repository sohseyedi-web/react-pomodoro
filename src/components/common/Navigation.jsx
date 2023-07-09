import { NavLink } from "react-router-dom";
import * as RiIcon from "react-icons/ri";

const LinkItem = [
  { path: "/profile", icon: <RiIcon.RiUser3Line size={25} /> },
  { path: "/setting", icon: <RiIcon.RiSettings3Line size={25} /> },
  { path: "/", icon: <RiIcon.RiTimeLine size={25} /> },
  { path: "/todos", icon: <RiIcon.RiCalendarLine size={25} /> },
];

const Navigation = () => {
  return (
    <nav className="py-3 absolute w-full bottom-0 flex items-center justify-around">
      {LinkItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            isActive
              ? "text-[#9190d9] font-semibold scale-100 hover:scale-110 transition-all duration-300"
              : "text-[#aaa] font-semibold scale-100 hover:scale-110 transition-all duration-300"
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
