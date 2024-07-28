import StoreProduct from "./StoreProduct";
import products from "../Data/products.json";

const Store = () => {
  return (
    <section
      id="store"
      className="container mx-auto flex flex-col min-h-screen items-center gap-4 scroll-mt-36 lg:scroll-mt-28"
    >
      <h1 className="text-6xl text-white">Store</h1>
      <p className="text-slate-200 text-center text-2xl">
        Check out our latest products and deals below!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <StoreProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Store;
