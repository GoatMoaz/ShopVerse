import styles from "./ContactInput.module.css";
import { useState } from "react";

const ContactInput = ({ label, type, textArea }) => {
  const [value, setValue] = useState("");
  const inputContent = textArea ? (
    <textarea
      className={`${styles.input} ${value ? styles["not-empty"] : ""} w-full`}
      onInput={(e) => setValue(e.target.value)}
      rows="4"
      required
    ></textarea>
  ) : (
    <input
      className={`${styles.input} ${value ? styles["not-empty"] : ""} w-full`}
      onInput={(e) => setValue(e.target.value)}
      type={type}
      autoComplete="off"
      required
    />
  );

  return (
    <div className={styles["input-group"]}>
      {inputContent}
      <label className={styles["user-label"]}>{label}</label>
    </div>
  );
};

export default ContactInput;
