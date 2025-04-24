import styles from "./styles.module.css";

export default function Field({label, type = "text"}) {
  return (
    <fieldset className={styles["field-wrapper"]}>
      <label className={styles["field-label"]} for="">{label}</label>
      {
        type == "textarea" ?
          <textarea className={styles["field"]} /> :
          <input className={styles["field"]} type="text" />
      }
    </fieldset>
  )
}