import styles from "./CartButton.module.css";
import Cart from "../Cart";

const CartButton = () => {
  return (
    <button className={styles.cartButton}>
      <Cart show={false}/> Add to cart
    </button>
  );
};

export default CartButton;
