"use client";

import Field from "@/components/field/field";
import styles from "./styles.module.css";
import ImagePicker from "@/components/image-picker/image-picker";
import { onSubmit } from "./handleForm";
import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import Popup from "@/components/popup";
import { useEffect, useState } from "react";

export default function Share() {
  const [state, formAction] = useFormState(onSubmit, {
    message: null,
    status: null,
  });
  
  const [popupVisibility, setPopupVisibility] = useState(false);

  useEffect(() => {
    setPopupVisibility(state.status != null);
  }, [state]);

  return (
    <>
      {popupVisibility && (
        <Popup
          title={state.status}
          text={state.message}
          status={state.status}
          setPopupVisibility={setPopupVisibility}
        />
      )}
      <main className={`horizontal-spacing ${styles["form-wrapper"]}`}>
        <article>
          <h1 className={styles["header-title"]}>
            Share your <span className={styles.highlight}>favorite meal</span>
          </h1>
          <p className={styles["header-description"]}>
            Or any other meal you feel needs sharing!
          </p>
        </article>
        <form className={styles.form} action={formAction}>
          <article className={styles["field-row"]}>
            <Field label="Your name" name="creator" />
            <Field label="Your email" name="creator_email" />
          </article>
          <Field label="Title" name="title" />
          <Field label="Short summary" name="summary" />
          <Field label="Instructions" name="instructions" type="textarea" />
          <ImagePicker label="Pick a image" name="image" />
          <FormButton buttonLabel="Share meal" />
        </form>
      </main>
    </>
  );
}
