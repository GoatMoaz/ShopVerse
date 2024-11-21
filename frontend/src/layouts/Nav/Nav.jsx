import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Cart from "../../components/UI/icons/Cart";
import CartDialog from "../Cart/CartDialog";

import logo from "../../assets/logo.webp";

import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const cartHandler = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <CartDialog open={cartOpen} setOpen={setCartOpen} />

      <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={logo} className="h-8 w-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              ShopVerse
            </span>
          </NavLink>
          <div className="flex items-center md:order-2">
            <button onClick={cartHandler}>
              <Cart />
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="flex items-center p-2 w-12 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400"
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
                ? "max-h-[500px] md:max-h-[none] md:h-auto"
                : "max-h-0 md:max-h-[none] md:h-auto"
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
                <NavLink to="/shop" className="link">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className="link">
                  Categories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
