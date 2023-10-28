import { NavLink,  } from "react-router-dom";
import tabs from "./tabs";

const Navbar = () => {

  const navbarList = tabs.map(({ id, title, order, path }) => (
    <li key={id}></li>
  ));

  return
}
export default Navbar;
