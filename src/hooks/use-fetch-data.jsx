import { useState } from "react";

const useFetchData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (id = null) => {
    try {
      setLoading(true);
      let response;
      if (!id) {
        response = await fetch(
          "https://shopverse-909e1-default-rtdb.firebaseio.com/products.json"
        );

        const data = await response.json();

        const products = [];

        for (const key in data) {
          const product = {
            firebaseId: key,
            ...data[key],
          };
          products.push(product);
        }
        setProducts(products);
      } else {
        response = await fetch(
          `https://shopverse-909e1-default-rtdb.firebaseio.com/products/${id}.json`
        );

        const data = await response.json();

        const product = {
          firebaseId: id,
          ...data,
        };
        setProducts([product]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { products, loading, fetchProducts };
};

export default useFetchData;
