import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-10 mt-1" src={logo} />
            <h1 className="text-4xl font-bold">Pulse Cafe</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to={"/addCoffee"} className="font-semibold text-xl">
              Add Cofee
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
