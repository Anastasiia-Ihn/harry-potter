import Link from "next/link";
import styles from "./SideNav.module.css";

export const SideNav = () => {
  return (
    <header>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};
