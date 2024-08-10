import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Layout/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Error from "./components/Error/Error";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
