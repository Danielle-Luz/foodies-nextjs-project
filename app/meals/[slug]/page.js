import { getMeal } from "@/api/meals";
import Image from "next/image";
import styles from "./styles.module.css";
import placeholderImage from "@/assets/black-background.jpg";

export default async function SelectedMeal(props) {
  const params = await props.params;
  const meal = getMeal(params.slug);
  const instructionsWithLineBreaks = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <main className={`horizontal-spacing ${styles["meal"]}`}>
      <article className={styles["meal-data"]}>
        <Image
          className={styles["meal-image"]}
          src={meal.image}
          alt={meal.title}
          placeholder="blur"
          blurDataURL={placeholderImage.src}
          fill
        />

        <article className={styles["meal-details"]}>
          <h2 className={styles["meal-title"]}>{meal.title}</h2>
          <p className={styles["meal-creation"]}>
            by{" "}
            <a
              className={styles["meal-highlight"]}
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className={styles["meal-summary"]}>{meal.summary}</p>
        </article>
      </article>
      <p
        className={styles["meal-instructions"]}
        dangerouslySetInnerHTML={{
          __html: instructionsWithLineBreaks,
        }}
      ></p>
    </main>
  );
}
