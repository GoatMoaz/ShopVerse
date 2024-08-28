import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./layouts/Nav/Nav";
import Footer from "./layouts/Footer/Footer";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ShopPage from "./pages/Shop";
import ProductDetailsPage from "./pages/ProductDetails";
import CategoriesPage from "./pages/Categories";
import ErrorPage from "./pages/Error";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ProductDetailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
