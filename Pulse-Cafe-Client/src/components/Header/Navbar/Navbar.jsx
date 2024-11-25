import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* <a className=" text-xl">Pulse Cafe</a> */}
          <Link className="flex items-center gap-2">
            <img className="w-12" src={logo} />
            <h1>Pulse Cafe</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink>Add Cofee</NavLink>
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
