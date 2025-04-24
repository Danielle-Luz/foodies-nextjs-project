import styles from "./styles.module.css";

export default function ImagePicker({ label, register }) {
  return (
    <article className={styles["image-picker-wrapper"]}>
      <fieldset className={styles["image-picker"]}>
        <label htmlFor={label}>{label}</label>
        <input id={label} type="file" accept="image/png, image/jpeg" {...register("image")} />
      </fieldset>
      <button className={styles["pick-button"]} type="button">
        {label}
      </button>
    </article>
  );
}
