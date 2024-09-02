import Header from "../components/Shop/Header";
import Products from "../components/Shop/Products";
import useFetchData from "../hooks/use-fetch-data";
import ProductsLoader from "../components/UI/Loaders/ProductsLoader";
import { useEffect, useState } from "react";
import ErrorPage from "./Error";

import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const { products, loading, fetchProducts, error } = useFetchData();
  const [category, setCategory] = useState("All");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
      fetchProducts(categoryParam);
    } else {
      setCategory("All");
      fetchProducts();
    }
  }, [categoryParam]);

  if (error.status) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <>
      <Header />
      {loading && <ProductsLoader />}
      {!loading && <Products products={products} category={category} />}
    </>
  );
};

export default ShopPage;
