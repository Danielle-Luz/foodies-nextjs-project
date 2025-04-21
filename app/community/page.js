import Image from 'next/image';
import styles from "./styles.module.css";
import { perks } from './perks-data';

export default function Community() {
  return (
    <main>
      <article className={styles["header"]}>
        <h2 className={styles["header-title"]}>One shared passion: <span className={styles.highlight}>Food</span></h2>
        <p className={styles["header-text"]}>Join our community and share your favorite recipes!</p>
      </article>
      <section className={styles["content"]}>
        <h2 className={styles["perks-title"]}>Community Perks</h2>
        <ul className={styles["perks-list"]}>
          {
            perks.map(perk => {
              <li className={styles["perks-list-item"]}>
                <Image className={styles["perks-image"]} src={perk.src} alt={perk.alt} />
                <p className={styles["perks-content"]}>{perk.content}</p>
              </li>
            })
          }
        </ul>
      </section>
    </main>
  );
}