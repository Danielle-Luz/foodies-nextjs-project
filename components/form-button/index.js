import styles from "./styles.module.css";

export default function FormButton({ buttonLabel }) {
  return (
    <input
      className={styles["submit-button"]}
      type="submit"
      value={buttonLabel}
    />
  );
}
