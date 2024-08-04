import headphone from "../../assets/headphone.png";
import ShopButton from "../UI/Buttons/ShopButton";
import { Slide } from "react-awesome-reveal";

import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-36 bg-gray-900 flex flex-col-reverse md:flex-row justify-center items-center md:h-screen px-4 md:px-8 pb-2">
      <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
        <Slide duration={1300} triggerOnce>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-100 font-bold">
            Welcome to <span className="logo">ShopVerse</span>
          </h1>
          <p className="text-slate-300 text-lg xs:text-xl sm:text-2xl lg:text-3xl mt-2">
            Your one-stop shop for all things tech and gadgets at the best
            prices you can find. Shop now and get the best deals on the latest
            gadgets.
          </p>
          <NavLink to="/shop">
            <ShopButton />
          </NavLink>
        </Slide>
      </div>
      <Slide duration={1300} triggerOnce direction="right">
        <img src={headphone} alt="hero" className="w-4/5 z-10 object-cover" />
      </Slide>
    </section>
  );
};

export default Hero;
