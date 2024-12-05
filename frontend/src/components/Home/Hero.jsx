import headphone from "../../assets/headphone.webp";
import ShopButton from "../UI/Buttons/ShopButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-36 bg-gray-900 flex flex-col-reverse md:flex-row justify-center items-center md:h-screen px-4 md:pl-4 md:pr-0 lg:pl-8 pb-2">
      <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
        <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-100 font-bold">
          Welcome to{" "}
          <span className="pointer-events-none whitespace-pre-wrap text-transparent bg-gradient-to-t from-white to-indigo-600 bg-clip-text">
            ShopVerse
          </span>
        </div>
        <p className="text-slate-300 text-lg xs:text-xl sm:text-2xl lg:text-3xl mt-2">
          Your one-stop shop for all things tech and gadgets at the best prices
          you can find. Shop now and get the best deals on the latest gadgets.
        </p>
        <Link to="/shop">
          <ShopButton />
        </Link>
      </div>

      <img
        src={headphone}
        alt="hero"
        className="w-full md:w-2/6 mx-auto z-10 object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
