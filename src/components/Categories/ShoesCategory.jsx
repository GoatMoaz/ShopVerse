import ProductsSlider from "../UI/ProductsSlider";
const ShoesCategory = ({ products }) => {
  return (
    <section className="w-full sm:container mx-auto py-8 px-8 border-dotted border-b-2">
      <h2 className="text-3xl font-bold mb-4">
        Shoes Latest Collection
      </h2>
      <p className="mb-8 italic text-gray-500">
        Check out our latest collection of shoes for all your everyday needs.
        Shop now!
      </p>
      <ProductsSlider products={products} />
    </section>
  );
};

export default ShoesCategory;
