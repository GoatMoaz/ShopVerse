import Features from "./components/Features";
import Hero from "./components/Hero";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews/Reviews";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          index
          element={
            <>
              <Hero />
              <Features />
              <Categories />
              <Reviews />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
