import { getMeal } from "@/api/meals";
import Image from "next/image";
import styles from "./styles.module.css";

export default async function SelectedMeal(props) {
  const params = await props.params;
  const meal = getMeal(params.slug);
  const instructionsWithLineBreaks = meal.instructions.replace("\n", "<br/>")

  return (
    <main className={styles["meal"]}>
      <article>
        <Image className={styles["meal-image"]} src={meal.image} alt={meal.title} fill />
        <article className={styles["meal-details"]}>
          <h2 className={styles["meal-title"]}>{meal.title}</h2>
          <p className={styles["meal-creation"]}>
            by <a className={styles["meal-highlight"]} href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles["meal-summary"]}>{meal.summary}</p>
        </article>
      </article>
      <p className={styles["meal-instructions"]} dangerouslySetInnerHTML={
        {
          __html: instructionsWithLineBreaks
        }
      }></p>
    </main>
  );
}