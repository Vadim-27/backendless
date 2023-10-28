import { NavLink, Outlet } from "react-router-dom";
import tabs from "./tabs";

import css from './navbar.module.scss'

const Navbar = () => {
   const sortedTabs = [...tabs].sort((a, b) => a.order - b.order);

  const navbarList = sortedTabs.map(({ id, title, path }) => (
    <li key={id}>
      <NavLink className={css.link} to={path}>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <div className={`${css.menu} container`}>
      <ul>{navbarList}</ul>
      <Outlet />
    </div>
  );
}
export default Navbar;
