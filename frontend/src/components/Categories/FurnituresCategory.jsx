import ProductsSlider from "../UI/ProductsSlider";

const FurnituresCategory = ({ products }) => {
  return (
    <section className="w-full sm:container mx-auto py-8 px-8 border-dotted border-b-2">
      <h2 className="text-3xl font-bold mb-4">
        Furnitures Latest Collection
      </h2>
      <p className="mb-8 italic text-gray-500">
        Check out our latest collection of furnitures for all your everyday
        needs. Shop now!
      </p>
      <ProductsSlider products={products} />
    </section>
  );
};

export default FurnituresCategory;
