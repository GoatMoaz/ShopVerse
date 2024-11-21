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
      id={label}
    ></textarea>
  ) : (
    <input
      className={`${styles.input} ${value ? styles["not-empty"] : ""} w-full`}
      onInput={(e) => setValue(e.target.value)}
      type={type}
      autoComplete="off"
      id={label}
      required
    />
  );

  return (
    <div className={styles["input-group"]}>
      {inputContent}
      <label className={styles["user-label"]} htmlFor={label}>{label}</label>
    </div>
  );
};

export default ContactInput;
