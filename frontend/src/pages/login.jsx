import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=3585&h=5006&dpr=1"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" to="/shop">
              <span className="sr-only">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M28.778 5H29c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1c0 .415.256.772.617.923L26.34 6H5.2C3.44 6 2 7.432 2 9.253l.52 8.495c.15 2.517 2.52 3.84 4.65 4.009l14.832 1.169c-.028.476.303.928.802 1.045c.572.131 1.144-.193 1.282-.74l1.064-4.134c1.068.334 1.863 1.489 1.863 2.788V22c0 1.608-1.204 3-2.635 3H3c-.547 0-1 .382-1 .956S2.447 27 2.994 27H5.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3h18a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3h.919C26.943 27 29 24.756 29 22v-.115c0-2.268-1.424-4.18-3.351-4.728zm-7.162 11H20v-4h2.605zm1.236-5H20V8.007l1.95.002c.84 0 1.45.776 1.25 1.582zM19 8.006V11h-4.38V8zm-5.38-.007V11h-4.6V7.994zm-5.6-.006V11H4.111L4 9.193c0-.666.54-1.204 1.21-1.204zM4.173 12H8.02v4h-3.6zm.308 5H8.02v2.83l-.68-.053c-1.34-.11-2.74-.875-2.82-2.149zm4.539 2.91V17h4.6v3.272zm5.6.44V17H19v3.62c0 .026.002.051.006.076zm5.38.25V17h1.369l-.679 2.747a1.276 1.276 0 0 1-.69.853M14.62 12H19v4h-4.38zm-5.6 0h4.6v4h-4.6z"
                />
              </svg>
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to ShopVerse
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Here you can find the best products at the best prices. We have a
              wide range of products for you to choose from. Login now to your
              account to start shopping.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-4 py-8 sm:px-6 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                to="/shop"
              >
                <span className="sr-only">Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M28.778 5H29c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1c0 .415.256.772.617.923L26.34 6H5.2C3.44 6 2 7.432 2 9.253l.52 8.495c.15 2.517 2.52 3.84 4.65 4.009l14.832 1.169c-.028.476.303.928.802 1.045c.572.131 1.144-.193 1.282-.74l1.064-4.134c1.068.334 1.863 1.489 1.863 2.788V22c0 1.608-1.204 3-2.635 3H3c-.547 0-1 .382-1 .956S2.447 27 2.994 27H5.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3h18a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3h.919C26.943 27 29 24.756 29 22v-.115c0-2.268-1.424-4.18-3.351-4.728zm-7.162 11H20v-4h2.605zm1.236-5H20V8.007l1.95.002c.84 0 1.45.776 1.25 1.582zM19 8.006V11h-4.38V8zm-5.38-.007V11h-4.6V7.994zm-5.6-.006V11H4.111L4 9.193c0-.666.54-1.204 1.21-1.204zM4.173 12H8.02v4h-3.6zm.308 5H8.02v2.83l-.68-.053c-1.34-.11-2.74-.875-2.82-2.149zm4.539 2.91V17h4.6v3.272zm5.6.44V17H19v3.62c0 .026.002.051.006.076zm5.38.25V17h1.369l-.679 2.747a1.276 1.276 0 0 1-.69.853M14.62 12H19v4h-4.38zm-5.6 0h4.6v4h-4.6z"
                  />
                </svg>
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to ShopVerse
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Here you can find the best products at the best prices. We have
                a wide range of products for you to choose from. Login now to
                your account to start shopping.
              </p>
            </div>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  className="mt-1 w-full py-2 px-2 rounded-md border-gray-200 border-2 bg-white text-sm text-gray-700 shadow-md"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  required
                  className="mt-1 w-full py-2 px-2 rounded-md border-gray-200 border-2 bg-white text-sm text-gray-700 shadow-md"
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
          </div>
        </main>
      </div>
    </section>
  );
};

export default LoginPage;
