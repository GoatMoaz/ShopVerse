import { useState } from "react";

const useFetchData = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

        if (!response.ok) {
          setError("Failed to fetch product.");
          setLoading(false);
          return;
        }

        const data = await response.json();

        setProduct(data.product);
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

  return { products, loading, fetchProducts, error, product };
};

export default useFetchData;
