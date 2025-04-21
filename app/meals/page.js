import Link from "next/link";
import styles from "./styles.module.css";
import { getAllMeals } from "@/api/meals";
import MealsList from "@/components/meals-list/meals-list";

export default function Meals() {
  const allMeals = getAllMeals();

  return (
    <main className="horizontal-spacing">
      <article className={styles["header"]}>
        <h2 className={styles["header-title"]}>
          Delicious meals, created <span className={styles["highlight"]}>by you</span>
        </h2>
        <p className={styles["header-text"]}>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <Link className={styles["header-link"]} href="/meals/share">Share your favorite recipe</Link>
      </article>
      <MealsList meals={allMeals} />
    </main>
  );
}