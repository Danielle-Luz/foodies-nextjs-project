import Image from "next/image";
import Link from "next/link";
import styles from  "./styles.module.css";
import ImageSlider from "@/components/image-slider/image-slider";

export default function Home() {
  return (
    <main className={`${styles["main-content"]} horizontal-spacing`}>
      <section className={styles.hero}>
        <ImageSlider />
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
      <section>
        <article className={styles.purpose}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </article>

        <article className={styles.purpose}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </article>
      </section>
    </main>
  );
}
