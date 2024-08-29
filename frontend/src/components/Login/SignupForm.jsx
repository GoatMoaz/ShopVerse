import { Link } from "react-router-dom";
import LoginInput from "../UI/Inputs/LoginInput";

const SignupForm = ({
  submitHandler,
  FirstName,
  LastName,
  Email,
  Password,
  PasswordConfirmation,
}) => {
  return (
    <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={submitHandler}>
      <div className="col-span-6 sm:col-span-3">
        <LoginInput
          label="First Name"
          type="text"
          id="FirstName"
          name="first_name"
          validate={true}
          onBlur={FirstName.blurHandler}
          onChange={FirstName.changeHandler}
          error={FirstName.hasError}
          errorMessage="Please enter a valid first name (at least 3 characters)."
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <LoginInput
          label="Last Name"
          type="text"
          id="LastName"
          name="last_name"
          validate={true}
          onBlur={LastName.blurHandler}
          onChange={LastName.changeHandler}
          error={LastName.hasError}
          errorMessage="Please enter a valid last name (at least 3 characters)."
        />
      </div>

      <div className="col-span-6">
        <LoginInput
          label="Email"
          type="email"
          id="Email"
          name="email"
          validate={true}
          onBlur={Email.blurHandler}
          onChange={Email.changeHandler}
          error={Email.hasError}
          errorMessage="Please enter a valid email address."
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <LoginInput
          label="Password"
          type="password"
          id="Password"
          name="password"
          validate={true}
          onBlur={Password.blurHandler}
          onChange={Password.changeHandler}
          error={Password.hasError}
          errorMessage="Please enter a valid password (at least 6 characters)."
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <LoginInput
          label="Password Confirmation"
          type="password"
          id="PasswordConfirmation"
          name="password_confirmation"
          validate={true}
          onBlur={PasswordConfirmation.blurHandler}
          onChange={PasswordConfirmation.changeHandler}
          error={PasswordConfirmation.hasError}
          errorMessage="Passwords do not match."
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="PolicyAccept" className="flex gap-2">
          <input
            type="checkbox"
            id="PolicyAccept"
            name="policy_accept"
            className="size-5 rounded-md border-gray-200 cursor-pointer bg-white shadow-sm"
          />

          <span className="text-sm text-gray-700">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-indigo-700 underline">
              terms and conditions{" "}
            </a>
            and{" "}
            <a href="#" className="text-indigo-700 underline">
              privacy policy
            </a>
          </span>
        </label>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-700 underline">
            Log in
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
