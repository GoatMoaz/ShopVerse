import { useEffect, useState } from "react";
import AllCategories from "../components/Categories/AllCategories";
import ShoesCategory from "../components/Categories/ShoesCategory";
import FurnituresCategory from "../components/Categories/FurnituresCategory";
import ElectronicsCategory from "../components/Categories/ElectronicsCategory";
import { Helmet } from "react-helmet";

import { useLoaderData } from "react-router-dom";

const CategoriesPage = () => {
  const [shoesProducts, setShoesProducts] = useState([]);
  const [furnituresProducts, setFurnituresProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);

  const { products } = useLoaderData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
      <Helmet>
        <title>Categories</title>
        <meta
          name="description"
          content="Explore our wide range of products across various categories including furniture, shoes, and electronics."
        />
        <meta
          name="keywords"
          content="categories, furniture, shoes, electronics, products"
        />
      </Helmet>
      <AllCategories />
      <FurnituresCategory products={furnituresProducts} />
      <ShoesCategory products={shoesProducts} />
      <ElectronicsCategory products={electronicsProducts} />
    </>
  );
};

export default CategoriesPage;

export async function loader() {
  const response = await fetch("http://localhost:3000/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }
  return response;
}
