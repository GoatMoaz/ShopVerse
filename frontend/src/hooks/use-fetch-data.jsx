import { useState } from "react";

const useFetchData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchProducts = async (category = null) => {
    try {
      setLoading(true);
      let response;
      if (category) {
        response = await fetch(
          `http://localhost:3000/products/category/${category}`
        );
      } else {
        response = await fetch("http://localhost:3000/products");
      }
      if (!response.ok) {
        setLoading(false);
        setError({
          message: "Failed to fetch products from the server.",
          status: response.status,
        });
        return;
      }
      const data = await response.json();

      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { products, loading, fetchProducts, error };
};

export default useFetchData;
