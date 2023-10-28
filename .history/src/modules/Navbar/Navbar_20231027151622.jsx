import { NavLink, Outlet } from "react-router-dom";
import tabs from "./tabs";

const Navbar = () => {

  const navbarList = tabs.map(({ id, title, order, path }) => (
    <li key={id}>
      <NavLink to={path}>{title}</NavLink>
    </li>
  ));

  return (
    <ul>
    </>
  )
}
export default Navbar;
