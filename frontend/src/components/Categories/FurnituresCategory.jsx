import ProductsSlider from "./CategorySlider";
import CategoriesContent from "./CategoriesContent";

const FurnituresCategory = ({ products }) => {
  return (
    <section className="w-full sm:container mx-auto py-8 px-8 border-dotted border-b-2">
      <CategoriesContent
        title="Furnitures Latest Collection"
        description="Check out our latest collection of furnitures for all your everyday
        needs. Shop now!"
      />
      <ProductsSlider products={products} />
    </section>
  );
};

export default FurnituresCategory;
