import logo from "../assets/logo.png";
import Cart from "./UI/Cart";

const Nav = () => {
  return (
    <nav className="w-full backdrop-blur-lg fixed top-0 z-10">
      <div className="flex justify-between items-center rounded-md px-4 w-full md:w-5/6 mx-auto">
        <a href="/">
          <img src={logo} alt="logo" className="w-24" />
        </a>
        <ul className="flex justify-center items-center mt-4 uppercase text-slate-200">
          <li className="link">
            <a href="#hero">Home</a>
          </li>
          <li className="link">
            <a href="/store">Store</a>
          </li>
          <li className="link">
            <a href="#about">About</a>
          </li>
          <li className="link">
            <a href="/cart">
              <Cart />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
