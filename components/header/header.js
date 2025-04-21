import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import NavbarLink from "../navbar-link/navbar-link";

export default function Header() {
  return (
    <header className={`${styles.header} horizontal-spacing`}>
      <Link className={styles.logo} href="./">
        <Image src={logo} alt="Ilustration of different types of meals over a plate" priority />
        <h1>NextLevel Food</h1>
      </Link>
      <ul className={styles.navbar}>
        <li>
          <NavbarLink href="/meals">Browse meals</NavbarLink>
        </li>
        <li>
          <NavbarLink href="/community">Foodies Community</NavbarLink>
        </li>
      </ul>
    </header>
  );
}