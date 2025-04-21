'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

export default function NavbarLink({href, children}) {
  const currentPath = usePathname();

  return (
    <Link 
      className={`${styles["navbar-link"]} ${currentPath.includes(href) ? styles["selected"] : ""}`} 
      href={href}
    >
      {children}
    </Link>
  );
}