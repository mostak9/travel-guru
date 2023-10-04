import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const navLinks = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/destination'}>Destination</NavLink></li>
    <li><NavLink to={'/blog'}>Blog</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-28" alt="" /></a>
    <input type="text" placeholder="Search your destination..." className="input input-bordered bg-neutral-400  bg-opacity-5 w-full max-w-xl" />
      </div>
      <div className="navbar-center hidden lg:flex">
      
      </div>
      <div className="navbar-end">
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {navLinks}
        </ul>
        <a className="btn bg-primary-color btn-sm">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
