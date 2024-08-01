import headphone from "../assets/headphone.png";
import ShopButton from "./UI/Buttons/ShopButton";

const Hero = () => {
  return (
    <section className="pt-36 bg-gray-900 flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-8 pb-2">
      <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-100 font-bold">
          Welcome to ShopVerse
        </h1>
        <p className="text-slate-300 text-lg xs:text-xl sm:text-2xl lg:text-3xl mt-2">
          Your one-stop shop for all things tech and gadgets at the best prices
          you can find. Shop now and get the best deals on the latest gadgets.
        </p>
        <ShopButton />
      </div>
      <img
        src={headphone}
        alt="hero"
        className="w-4/5 md:w-2/5 z-10 object-cover "
      />
    </section>
  );
};

export default Hero;
