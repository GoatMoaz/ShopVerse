import { Slide } from "react-awesome-reveal";

const AboutPage = () => {
  return (
    <>
      <header className="py-32 lg:py-60 z-0 bg-[url(https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=6000&h=4000&dpr=1)] bg-center bg-cover bg-no-repeat"></header>
      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <Slide triggerOnce duration={1000} direction="left">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto"
              />
            </Slide>
            <div className="lg:pl-[100px] flex flex-col justify-center items-center">
              <Slide
                triggerOnce
                duration={1000}
                direction="right"
                className="w-full"
              >
                <h2 className=" font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center ">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-left max-w-2xl mx-auto">
                  At ShopVerse, we are dedicated to providing you with an
                  exceptional e-commerce experience, offering a diverse range of
                  high-quality products to meet all your needs. Our
                  user-friendly platform ensures a seamless shopping journey,
                  from browsing our extensive catalog to making secure purchases
                  and tracking your orders.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex flex-col justify-center items-center">
              <Slide triggerOnce duration={1000}>
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are committed to customer satisfaction
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto">
                  innovation, and excellence in every aspect of our service.
                  Join us at ShopVerse, where technology meets convenience, and
                  discover the future of online shopping today.
                </p>
              </Slide>
            </div>
            <Slide triggerOnce duration={1000} direction="right">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block"
              />
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
