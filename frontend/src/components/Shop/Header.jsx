import clothes from "../../assets/clothes.webp"

const Header = () => {
  return (
    <header
      className="relative h-[500px] flex flex-col justify-center items-center bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${clothes}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl mt-8 text-slate-100 sm:text-7xl font-bold">
          Our Shop
        </h1>
        <p className="text-lg mt-4 text-slate-300 sm:text-2xl">
          The best place to shop for all your tech and gadget needs.
        </p>
      </div>
    </header>
  );
};

export default Header;
