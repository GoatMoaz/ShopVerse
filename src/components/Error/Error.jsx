import { NavLink } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <section className={styles.page_404}>
      <div className="container mx-auto">
        <div className={styles.four_zero_four_bg}>
          <h1 className="text-center">404</h1>
        </div>

        <div className={styles.contant_box_404}>
          <h3>Look like you're lost</h3>

          <p>the page you are looking for not avaible!</p>

          <NavLink to="/" className={styles.link_404}>
            Go to Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
