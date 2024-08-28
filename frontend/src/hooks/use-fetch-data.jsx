import { useState } from "react";

const useFetchData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (id = null, category = null) => {
    try {
      setLoading(true);
      let response;
      if ((!id && !category) || category === "All") {
        response = await fetch("http://localhost:3000/products");

        const data = await response.json();

        setProducts(data.products);
      } else if (id) {
        response = await fetch(`http://localhost:3000/products/${id}`);

        const data = await response.json();

        const product = data.product;

        setProducts([product]);
      } else if (category) {
        response = await fetch(
          `http://localhost:3000/products/category/${category}`
        );

        const data = await response.json();

        setProducts(data.products);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { products, loading, fetchProducts };
};

export default useFetchData;
