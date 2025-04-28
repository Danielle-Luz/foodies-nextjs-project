import { useRef, useState } from "react";
import styles from "./styles.module.css";

export default function ImagePicker({ label, register }) {
  const ref = useRef();
  const [pickedImage, setPickedImage] = useState(); 

  function selectImagePicker() {
    const imagePicker = ref.current.querySelector("input");
    imagePicker.click();
  }

  function updatePickedImage(event) {
    setPickedImage(event.targer.files[0])
  }

  return (
    <article className={styles["image-picker-wrapper"]}>
      <fieldset className={styles["image-picker"]} ref={ref}>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="file"
          accept="image/png, image/jpeg"
          onChange={updatePickedImage}
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
