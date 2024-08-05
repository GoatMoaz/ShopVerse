import Header from "./Header";
import Products from "./Products";
import useFetchData from "../../hooks/use-fetch-data";
import Loader from "../UI/Loader/Loader";
import { useEffect } from "react";

const Shop = () => {
  const { products, loading, fetchProducts } = useFetchData();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Products products={products} />
    </>
  );
};

export default Shop;
