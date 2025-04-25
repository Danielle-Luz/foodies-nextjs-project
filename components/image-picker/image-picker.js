import { useRef, useState } from "react";
import styles from "./styles.module.css";

export default function ImagePicker({ label, register }) {
  const ref = useRef();

  function selectImagePicker() {
    const imagePicker = ref.current.querySelector("input");
    imagePicker.click();
  }

  return (
    <article className={styles["image-picker-wrapper"]}>
      <fieldset className={styles["image-picker"]} ref={ref}>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="file"
          accept="image/png, image/jpeg"
          {...register("image")}
        />
      </fieldset>
      <button
        className={styles["pick-button"]}
        type="button"
        onClick={selectImagePicker}
      >
        {label}
      </button>
    </article>
  );
}
