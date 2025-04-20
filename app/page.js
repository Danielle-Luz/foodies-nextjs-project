import Image from "next/image";
import Link from "next/link";
import styles from  "./styles.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <article className={styles["hero-content"]}>
          <div>
            <h2 className={styles["hero-title"]}>Nextlevel food for nextlevel foodies</h2>
            <p className={styles["hero-text"]}>Taste and share food from all over the world!</p>
          </div>
          <div className={styles["hero-links"]}>
            <Link className={styles["hero-links-normal"]} href="/community">Join the community</Link>
            <Link className={styles["hero-links-highlight"]} href="/meals">Explore meals</Link>
          </div>
        </article>
      </section>
      <main>
        <h1></h1>
      </main>
    </>
  );
}
