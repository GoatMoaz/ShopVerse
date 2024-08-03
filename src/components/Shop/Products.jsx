import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "../UI/Loader/Loader";
import { Fade } from "react-awesome-reveal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://shopverse-909e1-default-rtdb.firebaseio.com/products.json"
      );
      const data = await response.json();
      const products = [];

      for (const key in data) {
        const product = {
          id: key,
          ...data[key],
        };
        products.push(product);
      }

      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      {!loading && (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between flex-col sm:flex-row-reverse mb-5">
            <select className="p-2 border border-gray-300 cursor-pointer rounded-lg">
              <option value="all">All</option>
              <option value="Tech">Tech</option>
              <option value="Clothes">Clothes</option>
              <option value="Furnitures">Furnitures</option>
              <option value="Shoes">Shoes</option>
            </select>
            <h2 className="text-2xl text-center sm:text-left font-extrabold tracking-tight text-gray-800">
              Trending Products
            </h2>
          </div>

          <Fade duration={1100} triggerOnce>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </Fade>
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default Products;
