import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import placeholderImage from "@/assets/black-background.jpg";

export default function MealsList({ meals }) {
  return (
    <ul className={styles["meal-list"]}>
      {meals.map((meal, index) => {
        return (
          <li className={styles.meal} key={index}>
            <Image
                className={styles["meal-image"]}
                src={meal.image}
                alt={meal.title}
                placeholder="blur"
                blurDataURL={placeholderImage.src}
                fill
              />
            <article className={styles["meal-details"]}>
              <header className={styles["meal-header"]}>
                <h3 className={styles["meal-title"]}>{meal.title}</h3>
                <p className={styles["meal-creation"]}>By {meal.creator}</p>
              </header>
              <p className={styles["meal-summary"]}>{meal.summary}</p>
              <Link
                className={styles["meal-link"]}
                href={`/meals/${meal.slug}`}
              >
                View details
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
