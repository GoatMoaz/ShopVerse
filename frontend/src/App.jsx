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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/shop", element: <ShopPage /> },
      {
        path: "/shop/:id",
        element: <ProductDetailsPage />,
      },
      { path: "/categories", element: <CategoriesPage /> },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
