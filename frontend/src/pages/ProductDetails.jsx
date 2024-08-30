import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import useFetchData from "../hooks/use-fetch-data";

import ErrorPage from "./Error";
import ProductImages from "../components/ProductDetails/ProductImages";
import ProductDetailsLoader from "../components/UI/Loaders/ProductDetailsLoader";
import ProductContent from "../components/ProductDetails/ProductContent";

const ProductDetailsPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split("/")[2];
  const { product, loading, fetchProducts, error } = useFetchData();

  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  return (
    <>
      {loading && <ProductDetailsLoader />}
      {error && <ErrorPage />}
      {product && (
        <section className="bg-sky-50 py-24 px-4 h-full md:h-screen flex justify-center items-center md:px-0">
          <div className="container mx-auto border-2 border-white gap-2 sm:gap-32 md:gap-0 pb-4 md:pb-32 bg-white shadow-xl rounded-lg pt-4 px-4 grid grid-cols-1 md:grid-cols-2">
            <ProductImages images={product.images} />
            <ProductContent product={product} />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetailsPage;
