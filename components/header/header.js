import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="./">
        <img src={logo.src} alt="Ilustration of different types of meals over a plate" />
        <h1>NextLevel Food</h1>
      </Link>
      <ul>
        <li>
          <Link href="/meals">Browse meals</Link>
        </li>
        <li>
          <Link href="/community">Foodies Community</Link>
        </li>
      </ul>
    </header>
  );
}