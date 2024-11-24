import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer/Footer";
import Nav from "../layouts/Nav/Nav";
import { useNavigation } from "react-router";
import LineLoader from "../components/UI/Loaders/LineLoader";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      {isNavigating && <LineLoader />}
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
