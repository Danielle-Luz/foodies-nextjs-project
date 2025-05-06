"use client";

import Field from "@/components/field/field";
import styles from "./styles.module.css";
import ImagePicker from "@/components/image-picker/image-picker";
import { onSubmit } from "./handleForm";

export default function Share() {

  return (
    <main className={`horizontal-spacing ${styles["form-wrapper"]}`}>
      <article>
        <h1 className={styles["header-title"]}>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p className={styles["header-description"]}>
          Or any other meal you feel needs sharing!
        </p>
      </article>
      <form className={styles.form} action={onSubmit}>
        <article className={styles["field-row"]}>
          <Field label="Your name" name="name" />
          <Field label="Your email" name="email" />
        </article>
        <Field label="Title" name="title" />
        <Field label="Short summary" name="summary" />
        <Field label="Instructions" name="instructions" type="textarea" />
        <ImagePicker label="Pick a image" name="image" />
        <input
          className={styles["submit-button"]}
          type="submit"
          value="Share meal"
        />
      </form>
    </main>
  );
}
