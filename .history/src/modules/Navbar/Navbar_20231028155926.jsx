import { NavLink, Outlet } from "react-router-dom";
import tabs from "./tabs";

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
    <>
      <ul>{navbarList}</ul>
      <Outlet/>
    </>
  );
}
export default Navbar;
