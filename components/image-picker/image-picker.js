"use client";

import { useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function ImagePicker({ label }) {
  const ref = useRef();
  const [pickedImage, setPickedImage] = useState();

  function selectImagePicker() {
    const imagePicker = ref.current.querySelector("input");
    imagePicker.click();
  }

  function updatePickedImage(event) {
    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <article className={styles["image-picker-wrapper"]}>
      {pickedImage && (
        <Image
          className={styles["picked-image"]}
          src={pickedImage}
          alt="Image of the meal selected by the user"
          fill
        />
      )}
      <fieldset className={styles["image-picker"]} ref={ref}>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="file"
          accept="image/png, image/jpeg"
          onChange={updatePickedImage}
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
