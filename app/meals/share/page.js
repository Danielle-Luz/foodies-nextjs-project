'use client'

import Field from "@/components/field/field";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import ImagePicker from "@/components/image-picker/image-picker";

export default function Share() {
  const { register, handleSubmit } = useForm({});
  return (
    <main className={`horizontal-spacing ${styles["form-wrapper"]}`}>
      <article>
        <h1 className={styles["header-title"]}>Share your <span className={styles.highlight}>favorite meal</span></h1>
        <p className={styles["header-description"]}>Or any other meal you feel needs sharing!</p>
      </article>
      <form className={styles.form}>
        <article className={styles["field-row"]}>
          <Field label="Your name" register={register} />
          <Field label="Your email" register={register} />
        </article>
        <Field label="Title" register={register} />
        <Field label="Short summary" register={register} />
        <Field label="Instructions" type="textarea" register={register} />
        <ImagePicker label="Pick a image" register={register} />
        <input className={styles["submit-button"]} type="submit" value="Share meal" />
      </form>
    </main>
  );
}