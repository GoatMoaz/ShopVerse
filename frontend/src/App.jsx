import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ShopPage from "./pages/Shop";
import ProductDetailsPage from "./pages/ProductDetails";
import CategoriesPage from "./pages/Categories";
import ErrorPage from "./pages/Error";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";

import Root from "./pages/Root";
import LoginRoot from "./pages/LoginRoot";

import { loader as PDLoader } from "./pages/ProductDetails";
import { loader as CategoriesLoader } from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <ErrorPage
        status={404}
        message="Page not found. Please go back to home."
      />
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <ProductDetailsPage />, loader: PDLoader },
      {
        path: "/categories",
        element: <CategoriesPage />,
        loader: CategoriesLoader,
      },
    ],
  },
  {
    path: "",
    element: <LoginRoot />,
    children: [
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
