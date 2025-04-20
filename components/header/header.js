import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="./">
        <Image src={logo} alt="Ilustration of different types of meals over a plate" priority />
        <h1>NextLevel Food</h1>
      </Link>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.navbarLink} href="/meals">Browse meals</Link>
        </li>
        <li>
          <Link className={styles.navbarLink} href="/community">Foodies Community</Link>
        </li>
      </ul>
    </header>
  );
}