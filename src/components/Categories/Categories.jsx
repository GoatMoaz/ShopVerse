import { useEffect, useState } from "react";
import AllCategories from "./AllCategories";
import ShoesCategory from "./ShoesCategory";
import FurnituresCategory from "./FurnituresCategory";
import ElectronicsCategory from "./ElectronicsCategory";

const Categories = () => {
  const products = [];
  const [shoesProducts, setShoesProducts] = useState([]);
  const [furnituresProducts, setFurnituresProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://shopverse-909e1-default-rtdb.firebaseio.com/products.json"
    );
    const data = await response.json();
    for (const key in data) {
      const product = {
        id: key,
        ...data[key],
      };
      products.push(product);
    }

    setElectronicsProducts(
      products.filter((product) => product.category.name === "Electronics")
    );

    setFurnituresProducts(
      products.filter((product) => product.category.name === "Furniture")
    );

    setShoesProducts(
      products.filter((product) => product.category.name === "Shoes")
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <AllCategories />
      <FurnituresCategory products={furnituresProducts} />
      <ShoesCategory products={shoesProducts} />
      <ElectronicsCategory products={electronicsProducts} />
    </>
  );
};

export default Categories;
