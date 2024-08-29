import { Link } from "react-router-dom";
import LoginCart from "../UI/icons/LoginCart";

const LoginDescription = () => {
  return (
    <div className="relative -mt-16 block lg:hidden">
      <Link
        className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
        to="/shop"
      >
        <LoginCart />
      </Link>

      <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Welcome to ShopVerse
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        Here you can find the best products at the best prices. We have a wide
        range of products for you to choose from. Login now to your account to
        start shopping.
      </p>
    </div>
  );
};

export default LoginDescription;
