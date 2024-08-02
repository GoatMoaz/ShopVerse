const NavMenu = (props) => {
  return (
    <div
      className={`${
        props.open ? "block" : "hidden"
      } md:hidden absolute top-12 left-0 w-full h-screen backdrop-blur-lg overflow-y-hidden bg-opacity-90`}
      onClick={props.setMenu}
    >
      <div className="flex flex-col items-center text-white justify-center h-full gap-8">
        <a href="#" className="link">
          About
        </a>
        <a href="#" className="link">
          Shop
        </a>
        <a href="#" className="link">
          Categories
        </a>
        <a
          href="#"
          className="bg-slate-950 rounded-2xl px-6 py-2 hover:bg-black transition-all duration-300"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
