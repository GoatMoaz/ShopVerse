import { Link } from "react-router-dom";
import LoginCart from "../UI/icons/LoginCart";

const LoginBackground = () => {
  return (
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="background"
        src="https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=3585&h=5006&dpr=1"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <Link className="block text-white" to="/shop">
          <LoginCart />
        </Link>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to ShopVerse
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          Here you can find the best products at the best prices. We have a wide
          range of products for you to choose from. Login now to your account to
          start shopping.
        </p>
      </div>
    </section>
  );
};

export default LoginBackground;
