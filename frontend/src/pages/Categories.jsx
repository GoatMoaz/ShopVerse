import { useEffect, useState } from "react";
import AllCategories from "../components/Categories/AllCategories";
import ShoesCategory from "../components/Categories/ShoesCategory";
import FurnituresCategory from "../components/Categories/FurnituresCategory";
import ElectronicsCategory from "../components/Categories/ElectronicsCategory";
import useFetchData from "../hooks/use-fetch-data";
import Loader from "../components/UI/Loaders/Loader";

const CategoriesPage = () => {
  const [shoesProducts, setShoesProducts] = useState([]);
  const [furnituresProducts, setFurnituresProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);

  const { products, loading, fetchProducts } = useFetchData();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products) {
      setFurnituresProducts(
        products.filter((product) => product.category === "Furniture")
      );

      setShoesProducts(
        products.filter((product) => product.category === "Shoes")
      );

      setElectronicsProducts(
        products.filter((product) => product.category === "Electronics")
      );
    }
  }, [products]);

  return (
    <>
      {loading && <Loader />}
      <AllCategories />
      <FurnituresCategory products={furnituresProducts} />
      <ShoesCategory products={shoesProducts} />
      <ElectronicsCategory products={electronicsProducts} />
    </>
  );
};

export default CategoriesPage;
