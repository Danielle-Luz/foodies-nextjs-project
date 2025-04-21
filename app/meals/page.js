import Link from "next/link";
import styles from "./styles.module.css";

export default function Meals() {
  return (
    <main>
      <article>
        <h2 className={styles["header-title"]}>
          Delicious meals, created 
          <span className={styles["highlight"]}>by you</span>
        </h2>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <Link className={styles["header-link"]} href="/meals/share">Share your favorite recipe</Link>
      </article>
    </main>
  );
}