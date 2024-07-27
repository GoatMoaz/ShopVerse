import ShopButton from "./UI/Buttons/ShopButton";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="container mx-auto flex flex-col justify-center items-center md:items-start h-screen"
      >
        <h1 className="font-bold text-center text-3xl min-[425px]:text-4xl md:text-left md:text-5xl text-slate-100">
          Welcome to Planetary Plaza
        </h1>
        <p className="text-lg text-center md:text-left text-slate-300 mt-4 w-full md:w-1/2">
          Explore our vast selection of moons and planets. Find the perfect
          celestial body for your collection.
        </p>
        <ShopButton />
      </section>
    </>
  );
};

export default Hero;
