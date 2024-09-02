import { NavLink } from "react-router-dom";
import styles from "./Error.module.css";

const ErrorPage = ({ status, message }) => {
  return (
    <section className={styles.page_404}>
      <div className="container mx-auto">
        <div className={styles.four_zero_four_bg}>
          <h1 className="text-center">{status}</h1>
        </div>

        <div className={styles.contant_box_404}>
          <h3>{message}</h3>

          <NavLink to="/" className={styles.link_404}>
            Go to Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
