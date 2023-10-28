import { NavLink, Outlet } from "react-router-dom";
import tabs from "./tabs";

const Navbar = () => {
  const sortedTabs = tabs.slice().sort((a, b) => a.order - b.order);

  const navbarList = sortedTabs.map(({ id, title, order, path }) => (
    <li key={id}>
      <NavLink to={path}>{title}</NavLink>
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
