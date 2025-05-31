import styles from "./styles.module.css";

export default function Popup({ title, text }) {
  return (
    <article className={styles["popup-background"]}>
      <div className={styles["popup-wrapper"]}>
        <button className={styles["close-button"]}>
          <img
            src="https://img.icons8.com/material-rounded/100/ffffff/delete-sign.png"
            alt="close popup icon"
          />
        </button>
        <article className={styles["popup"]}>
          <h2>{title}</h2>
          <p className={styles["popup-text"]}>{text}</p>
        </article>
      </div>
    </article>
  );
}
