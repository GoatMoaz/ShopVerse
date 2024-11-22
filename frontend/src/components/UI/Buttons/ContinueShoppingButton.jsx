import classes from "./ContinueShoppingButton.module.css";
import { useNavigate } from "react-router-dom";

const ContinueShoppingButton = () => {
    const navigate = useNavigate();

    const returnToShop = () => {
      navigate("/shop");
    };
  
  return <button onClick={returnToShop} className={classes.button}> Continue Shopping</button>;
};

export default ContinueShoppingButton;
