import AddToCartButton from "../UI/Buttons/AddToCartButton";

const ProductContent = ({ product }) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-xl sm:text-2xl font-bold">{product.title}</h2>
      <p className="text-sm sm:text-lg">{product.description}</p>
      <p className="text-xl sm:text-2xl text-indigo-600 font-semibold">
        ${product.price.toFixed(2)}
      </p>
      <AddToCartButton />
    </div>
  );
};

export default ProductContent;
