import ProductsSlider from "./CategorySlider";
import CategoriesContent from "./CategoriesContent";

const ElectronicsCategory = ({ products }) => {
  return (
    <section className="w-full sm:container mx-auto py-8 px-8">
      <CategoriesContent
        title="Electronics Latest Collection"
        description=" Check out our latest collection of electronics for all your everyday
        needs. Shop now!"
      />
      <ProductsSlider products={products} />
    </section>
  );
};

export default ElectronicsCategory;
