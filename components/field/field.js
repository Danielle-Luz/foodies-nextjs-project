import styles from "./styles.module.css";

export default function Field({ label, name, type = "text" }) {
  return (
    <fieldset className={styles["field-wrapper"]}>
      <label className={styles["field-label"]} htmlFor={label}>
        {label}
      </label>
      {type == "textarea" ? (
        <textarea className={styles["field"]} name={name} />
      ) : (
        <input
          id={label}
          className={styles["field"]}
          name={name}
          type="text"
        />
      )}
    </fieldset>
  );
}
