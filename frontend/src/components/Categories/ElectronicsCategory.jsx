import ProductsSlider from "../UI/ProductsSlider";

const ElectronicsCategory = ({products}) => {
  return (
    <section className="w-full sm:container mx-auto py-8 px-8">
      <h2 className="text-3xl font-bold mb-4">Electronics Latest Collection</h2>
      <p className="mb-8 italic text-gray-500">
        Check out our latest collection of electronics for all your everyday
        needs. Shop now!
      </p>
      <ProductsSlider products={products} />
    </section>
  );
};

export default ElectronicsCategory;
