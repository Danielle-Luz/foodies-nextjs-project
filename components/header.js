import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="./">
        <img src={logo.src} alt="Ilustration of different types of meals over a plate" />
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