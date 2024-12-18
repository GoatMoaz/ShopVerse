import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["footer-col"]}>
            <h1>company</h1>
            <ul className="">
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-col"]}>
            <h1>get help</h1>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-col"]}>
            <h1>online shop</h1>
            <ul>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-col"]}>
            <h1>follow us</h1>
            <div className={styles["social-links"]}>
              <a href="#" aria-label="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
