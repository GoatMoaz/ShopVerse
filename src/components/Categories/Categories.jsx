import { useEffect, useState } from "react";
import AllCategories from "./AllCategories";
import ShoesCategory from "./ShoesCategory";
import FurnituresCategory from "./FurnituresCategory";
import ElectronicsCategory from "./ElectronicsCategory";
import useFetchData from "../../hooks/use-fetch-data";
import Loader from "../UI/Loader/Loader";

const Categories = () => {
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
        products.filter((product) => product.category.name === "Furniture")
      );

      setShoesProducts(
        products.filter((product) => product.category.name === "Shoes")
      );

      setElectronicsProducts(
        products.filter((product) => product.category.name === "Electronics")
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

export default Categories;
