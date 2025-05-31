import styles from "./styles.module.css";

export default function Popup({ title, text }) {
  return (
    <article className={styles["popup-background"]}>
      <div className={styles["popup-wrapper"]}>
        <button>
          x
        </button>
        <article className={styles["popup"]}>
          <h2>{title}</h2>
          <p className={styles["popup-text"]}>{text}</p>
        </article>
      </div>
    </article>
  )
}