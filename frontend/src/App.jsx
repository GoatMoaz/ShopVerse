import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Root from "./pages/Root";
import ErrorPage from "./pages/Error";

const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetails"));
const CategoriesPage = lazy(() => import("./pages/Categories"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));

import { loader as PDLoader } from "./pages/ProductDetails";
import { loader as CategoriesLoader } from "./pages/Categories";
import AppLoader from "./components/UI/Loaders/AppLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<AppLoader />}>
        <Root />
      </Suspense>
    ),
    errorElement: (
      <ErrorPage
        status={404}
        message="Page not found. Please go back to home."
      />
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetailsPage />,
        loader: PDLoader,
      },
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
