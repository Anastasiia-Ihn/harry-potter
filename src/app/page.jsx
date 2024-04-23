import { Books } from "./components/Books/Books";
import { advent_pro } from "./fonts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={advent_pro.className}>Simple</h1>
      <Books />
    </main>
  );
}
