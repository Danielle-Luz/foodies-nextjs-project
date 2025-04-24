import Field from "@/components/field/field";
import styles from "./styles.module.css";

export default function Share() {
  return (
    <main className={`horizontal-spacing ${styles["form-wrapper"]}`}>
      <article>
        <h1 className={styles["header-title"]}>Share your <span className={styles.highlight}>favorite meal</span></h1>
        <p className={styles["header-description"]}>Or any other meal you feel needs sharing!</p>
      </article>
      <form>
        <article className={styles["field-row"]}>
          <Field label="Your name" />
          <Field label="Your email" />
        </article>
      </form>
    </main>
  );
}