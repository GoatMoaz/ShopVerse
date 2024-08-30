import Header from "../components/Shop/Header";
import Products from "../components/Shop/Products";
import useFetchData from "../hooks/use-fetch-data";
import ProductsLoader from "../components/UI/Loaders/ProductsLoader";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const { products, loading, fetchProducts } = useFetchData();
  const [category, setCategory] = useState("All");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
      fetchProducts(null, categoryParam);
    } else {
      setCategory("All");
      fetchProducts();
    }
  }, [categoryParam]);

  return (
    <>
      <Header />
      {loading && <ProductsLoader />}
      {!loading && <Products products={products} category={category} />}
    </>
  );
};

export default ShopPage;
