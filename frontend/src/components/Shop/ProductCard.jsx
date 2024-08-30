import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [image, setImage] = useState(0);
  const navigate = useNavigate();

  const changeImage = () => {
    setImage(1);
  };

  const resetImage = () => {
    setImage(0);
  };

  const clickHandler = () => {
    navigate(`/shop/${product._id}`);
  };

  return (
    <>
      <li className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            onMouseEnter={changeImage}
            onMouseLeave={resetImage}
            onClick={clickHandler}
            alt={product.title}
            src={product.images[image]}
            className="h-full w-full object-cover object-center cursor-pointer group-hover:opacity-75 transform transition duration-300 hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700 truncate">{product.title}</h3>
        <p className="mt-1 text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </li>
    </>
  );
};

export default ProductCard;
