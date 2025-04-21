import Link from "next/link";

export default function NavbarLink({href, children}) {
  return (
    <Link className={`${styles.navbarLink}`} href={href}>{children}</Link>
  );
}