import logo from "../assets/logo.png";
import Cart from "./UI/Cart";

const Nav = () => {
  return (
    <nav className="w-full backdrop-blur-lg fixed top-0 z-10">
      <div className="flex flex-col justify-between items-center rounded-md px-4 w-full md:w-5/6 sm:flex-row mx-auto">
        <a href="/">
          <img src={logo} alt="logo" className="w-20" />
        </a>
        <div className="flex justify-center items-center mt-4 uppercase text-slate-200">
          <a href="#hero" className="link">
            Home
          </a>
          <a href="#store" className="link">
            Store
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="/cart" className="link">
            <Cart show={true}/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
