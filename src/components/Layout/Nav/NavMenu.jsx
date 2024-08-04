import { Link } from "react-router-dom";

const NavMenu = (props) => {
  return (
    <div
      className={`${
        props.open ? "block" : "hidden"
      } md:hidden absolute top-12 mt-1 left-0 w-full h-screen backdrop-blur-lg overflow-y-hidden bg-opacity-90`}
      onClick={props.setMenu}
    >
      <div className="flex flex-col items-center text-white bg-slate-900 bg-opacity-65 justify-center h-full gap-8">
        <Link to="/about" className="link ">
          About
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
        <Link to="/categories" className="link">
          Categories
        </Link>
        <Link
          to="/login"
          className="bg-indigo-600 rounded-2xl px-6 py-2 hover:bg-indigo-800 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
