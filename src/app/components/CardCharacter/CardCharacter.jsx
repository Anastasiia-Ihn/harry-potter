import Image from "next/image";
import styles from "./CardCharacter.module.css";
export const CardCharacter = ({ character }) => {
  const { fullName, hogwartsHouse, birthdate, children, interpretedBy, image } =
    character;
  return (
    <li className={styles.container}>
      <div>
        <Image src={image} width="200" height="300" alt={`Image ${fullName}`} />
      </div>
      <div className={styles.wrapper}>
        <h3>{fullName}</h3>
        <h4>House: {hogwartsHouse}</h4>
        <p>{birthdate}</p>
        <p> Children:</p>
        <ul>
          {children.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
        <p>Interpreted by {interpretedBy}</p>
      </div>
    </li>
  );
};
