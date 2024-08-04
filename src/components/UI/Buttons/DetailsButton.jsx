import styles from "./DetailsButton.module.css";
import { NavLink } from "react-router-dom";

const DetailsButton = () => {
  return <NavLink to="#" className={styles["boton-elegante"]}>View Details</NavLink>;
};

export default DetailsButton;
