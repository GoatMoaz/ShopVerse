import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer/Footer";
import Nav from "../layouts/Nav/Nav";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
