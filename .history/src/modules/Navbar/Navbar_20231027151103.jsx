import { NavLink, Outlet } from "react-router-dom";
import tabs from "./tabs";

const Navbar = () => {

  const navbarList = tabs.map(({ id, title, order, path }) => (
    <li key={order}>
      <NavLink></NavLink>
    </li>
  ));

  return
}
export default Navbar;
