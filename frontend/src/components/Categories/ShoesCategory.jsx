import ProductsSlider from "./CategorySlider";
import CategoriesContent from "./CategoriesContent";
const ShoesCategory = ({ products }) => {
  return (
    <section className="w-full sm:container mx-auto py-8 px-8 border-dotted border-b-2">
      <CategoriesContent
        title="Shoes Latest Collection"
        description="Check out our latest collection of shoes for all your everyday needs. Shop now!"
      />
      <ProductsSlider products={products} />
    </section>
  );
};

export default ShoesCategory;
