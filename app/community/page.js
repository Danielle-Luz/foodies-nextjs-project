import Image from 'next/image';
import styles from "./styles.module.css";
import { perks } from './perks-data';

export default function Community() {
  console.log(perks);
  return (
    <main className={`horizontal-spacing ${styles["content"]}`}>
      <article className={styles["header"]}>
        <h2 className={styles["header-title"]}>One shared passion: <span className={styles.highlight}>Food</span></h2>
        <p className={styles["header-text"]}>Join our community and share your favorite recipes!</p>
      </article>
      <section className={styles["perks-content"]}>
        <h2>Community Perks</h2>
        <ul className={styles["perks-list"]}>
          {
            perks.map(
              (perk, key) => {
              return (
                <li key={key} className={styles["perks-list-item"]}>
                  <p className={styles["perks-content"]}>{perk.content}</p>
                  <Image className={styles["perks-image"]} src={perk.src} alt={perk.alt} />
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}