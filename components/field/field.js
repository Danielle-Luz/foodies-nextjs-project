import styles from "./styles.module.css";

export default function Field({ label, register, type = "text" }) {
  return (
    <fieldset className={styles["field-wrapper"]}>
      <label className={styles["field-label"]} htmlFor={label}>
        {label}
      </label>
      {type == "textarea" ? (
        <textarea className={styles["field"]} />
      ) : (
        <input
          id={label}
          className={styles["field"]}
          type="text"
          {...register(label)}
        />
      )}
    </fieldset>
  );
}
