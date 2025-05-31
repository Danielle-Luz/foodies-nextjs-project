import styles from "./styles.module.css";

export default function Popup({ title, text }) {
  return (
    <article className={styles["popup-wrapper"]}>
      <article className={styles["popup"]}>
        <h2 className={styles["popup-title"]}>{title}</h2>
        <h2 className={styles["popup-text"]}>{text}</h2>
      </article>
    </article>
  )
}