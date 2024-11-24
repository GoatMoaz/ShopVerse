import { useState } from "react";

const PRODUCTION_URL = import.meta.env.VITE_PRODUCTION_URL;

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
          `${PRODUCTION_URL}/api/products/category/${category}`
        );
      } else {
        response = await fetch(`${PRODUCTION_URL}/api/products`);
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
      setError({
        message: "Something went wrong.",
        status: 500,
      });
    }
  };

  return { products, loading, fetchProducts, error };
};

export default useFetchData;
