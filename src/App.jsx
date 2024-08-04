import Nav from "./components/Layout/Nav/Nav";
import Footer from "./components/Layout/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
