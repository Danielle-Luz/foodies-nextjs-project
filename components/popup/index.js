import styles from "./styles.module.css";

export default function Popup({ title, text, status }) {
  const imagesByStatus = {
    error: "https://img.icons8.com/metro/200/FA5252/error.png",
    success: "https://img.icons8.com/material-rounded/200/169B74/ok--v1.png",
  };
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
          <img
            className={styles["popup-status-image"]}
            src={imagesByStatus[status]}
            alt="icon that indicates the status of the form submission"
          />
          <h2>{title}</h2>
          <p className={styles["popup-text"]}>{text}</p>
        </article>
      </div>
    </article>
  );
}
