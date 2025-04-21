import Link from "next/link";
import styles from "./styles.module.css";

export default function MealsLayout({ children }) {
  return (
    <>
      <article className={styles["header"]}>
        <h2 className={styles["header-title"]}>
          Delicious meals, created <span className={styles["highlight"]}>by you</span>
        </h2>
        <p className={styles["header-text"]}>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <Link className={styles["header-link"]} href="/meals/share">Share your favorite recipe</Link>
      </article>
      {children}
    </>
  );
}