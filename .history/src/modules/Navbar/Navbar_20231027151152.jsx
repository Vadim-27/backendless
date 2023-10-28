import { NavLink, Outlet } from "react-router-dom";
import tabs from "./tabs";

const Navbar = () => {

  const navbarList = tabs.map(({ id, title, order, path }) => (
    <li key={order}>
      <NavLink t>{title}</NavLink>
    </li>
  ));

  return
}
export default Navbar;
