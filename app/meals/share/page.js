"use client";

import Field from "@/components/field/field";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import ImagePicker from "@/components/image-picker/image-picker";

export default function Share() {
  const { register, handleSubmit, setFocus } = useForm({});
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
      <form className={styles.form}>
        <article className={styles["field-row"]}>
          <Field label="Your name" />
          <Field label="Your email" />
        </article>
        <Field label="Title" />
        <Field label="Short summary" />
        <Field label="Instructions" type="textarea" />
        <ImagePicker label="Pick a image" />
        <input
          className={styles["submit-button"]}
          type="submit"
          value="Share meal"
        />
      </form>
    </main>
  );
}
