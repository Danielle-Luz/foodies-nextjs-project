import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({href, children}) {
  const currentPath = usePathname();

  return (
    <Link className={`${styles["navbar-link"]}`} href={href}>{children}</Link>
  );
}