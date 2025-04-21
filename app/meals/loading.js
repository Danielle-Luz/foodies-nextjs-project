import styles from "./loading.module.css";

export default function loadBindings() {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles.loading}></div>
    </div>
  );
}