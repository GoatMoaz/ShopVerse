import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 ">
          <img src="./logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            ShopVerse
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 ">
          <button
            type="button"
            className="text-white focus:ring-4 focus:outline-none hidden md:block font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-12 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={menuHandler}
          >
            {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:w-auto md:order-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
            menuOpen
              ? "max-h-screen md:max-h-full md:flex"
              : "max-h-0 md:flex md:max-h-full"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col py-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="link">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className="link">
                Categories
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="text-white focus:ring-4 focus:outline-none block md:hidden font-medium rounded-lg text-sm px-4 mx-2 mt-2 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Get started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
