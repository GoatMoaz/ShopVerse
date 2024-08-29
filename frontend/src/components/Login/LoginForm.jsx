import { Link } from "react-router-dom";
import LoginInput from "../UI/Inputs/LoginInput";

const LoginForm = () => {
  return (
    <form className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <LoginInput
          label="Email"
          type="email"
          id="Email"
          name="email"
          validate={false}
        />
      </div>

      <div className="col-span-6">
        <LoginInput
          label="Password"
          type="password"
          id="Password"
          name="password"
          validate={false}
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
          Login
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-700 underline">
            Sign Up
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
