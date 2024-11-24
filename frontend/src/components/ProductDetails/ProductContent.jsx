import { useState, useRef } from "react";
import AddToCartButton from "../UI/Buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/store";
import Success from "../UI/Notifications/Success";

const ProductContent = ({ product }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(product));
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };
  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-xl sm:text-2xl font-bold">{product.title}</h2>
      <p className="text-sm sm:text-lg">{product.description}</p>
      <p className="text-xl sm:text-2xl text-indigo-600 font-semibold">
        ${product.price.toFixed(2)}
      </p>
      <AddToCartButton addToCartHandler={addToCartHandler} />
      {showSuccess && <Success />}
    </div>
  );
};

export default ProductContent;
