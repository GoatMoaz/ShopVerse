import styles from "./DetailsButton.module.css";
import { useNavigate } from "react-router-dom";

const DetailsButton = ({ id }) => {
  const navigate = useNavigate();

  const viewDetailsHandler = () => {
    navigate(`/shop/${id}`);
  };

  return (
    <button onClick={viewDetailsHandler} className={styles["boton-elegante"]}>
      View Details
    </button>
  );
};

export default DetailsButton;
