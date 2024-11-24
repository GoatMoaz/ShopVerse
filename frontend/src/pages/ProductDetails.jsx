import { useLoaderData } from "react-router-dom";

import ProductImages from "../components/ProductDetails/ProductImages";
import ProductContent from "../components/ProductDetails/ProductContent";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  const { product } = useLoaderData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  return (
    <>
      <Helmet>
        <title>{product.title} - Product Details</title>
        <meta
          name="description"
          content={`Find out more about ${product.title}. ${product.description}`}
        />
        <meta
          name="keywords"
          content={`${product.title}, ${product.category}, buy ${product.title}`}
        />
      </Helmet>
      <section className="bg-sky-50 py-24 px-4 h-full md:h-screen flex justify-center items-center md:px-0">
        <div className="container mx-auto border-2 border-white gap-2 sm:gap-32 md:gap-0 pb-4 md:pb-32 bg-white shadow-xl rounded-lg pt-4 px-4 grid grid-cols-1 md:grid-cols-2">
          <ProductImages images={product.images} />
          <ProductContent product={product} />
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;

export async function loader({ params }) {
  const PRODUCTION_URL = import.meta.env.VITE_PRODUCTION_URL;

  const response = await fetch(`${PRODUCTION_URL}/api/products/${params.id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product.");
  }
  return response;
}
