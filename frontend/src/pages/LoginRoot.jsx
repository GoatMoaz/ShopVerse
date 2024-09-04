import { Outlet } from "react-router-dom";
import LoginBackground from "../components/Login/LoginBackground";
import LoginDescription from "../components/Login/LoginDescription";

const LoginRoot = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <LoginBackground />
        <main className="flex items-center justify-center px-4 py-8 sm:px-6 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <LoginDescription />
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default LoginRoot;
