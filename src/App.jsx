import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Layout/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Error from "./components/Error/Error";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
