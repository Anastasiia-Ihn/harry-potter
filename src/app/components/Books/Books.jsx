// import styles from "./.module.css";
import { advent_pro } from "../../fonts";
import { ListBooks } from "../ListBooks/ListBooks";

export function Books() {
  return (
    <section>
      <h2 className={advent_pro.className}>All books</h2>
      <ListBooks />
    </section>
  );
}
