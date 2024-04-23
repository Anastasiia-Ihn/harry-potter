import { fetchBooks } from "@/app/(utils)/fetchApi";
import Image from "next/image";
import styles from "./ListBook.module.css";

export const ListBooks = async () => {
  const allBooks = await fetchBooks();

  return (
    <ul className={styles.list}>
      {allBooks.length &&
        allBooks.map((book) => {
          return (
            <li key={book.number}>
              <details className={styles.details}>
                <summary>
                  <Image
                    className={styles.img}
                    src={book.cover}
                    alt={`Image ${book.title}`}
                    width="300"
                    height="450"
                  />
                  <p className={styles.date}>{book.releaseDate}</p>{" "}
                  <h3 className={styles.header}>{book.title}</h3>
                </summary>
                <div className={styles.thumb}>
                  {" "}
                  <p>{book.description}</p>
                  <p>{`${book.pages} pages`}</p>
                </div>
              </details>
            </li>
          );
        })}
    </ul>
  );
};
