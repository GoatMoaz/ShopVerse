import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductDetailsPage from "./pages/ProductDetails";
import CategoriesPage from "./pages/Categories";
import CheckoutPage from "./pages/Checkout";
import ErrorPage from "./pages/Error";

import Root from "./pages/Root";

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
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <ProductDetailsPage />, loader: PDLoader },
      {
        path: "/categories",
        element: <CategoriesPage />,
        loader: CategoriesLoader,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
