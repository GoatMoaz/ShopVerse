import { Link } from "react-router-dom";

const Product = ({ product, removeItemHandler }) => {
  return (
    <li key={product._id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.imageAlt}
          src={product.image}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link
                to={`/shop/${product._id}`}
                onClick={() => setOpen(false)}
                className="hover:text-indigo-500 transition-all duration-100 line-clamp-1"
              >
                {product.title}
              </Link>
            </h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeItemHandler(product._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
