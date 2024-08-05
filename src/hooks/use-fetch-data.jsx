import { useState } from "react";

const useFetchData = () => {
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

    return { products, loading, fetchProducts };
};

export default useFetchData;
