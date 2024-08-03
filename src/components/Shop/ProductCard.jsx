const ProductCard = ({ product }) => {
  return (
    <li className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          alt={product.title}
          src={product.images[0]}
          className="h-full w-full object-cover object-center cursor-pointer group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 truncate">{product.title}</h3>
      <p className="mt-1 text-lg font-bold text-gray-900">${product.price}.00</p>
    </li>
  );
};

export default ProductCard;
