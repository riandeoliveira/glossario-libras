import signs from "./signs.json";
import { SignCard } from "../SignCard";
import styles from "./styles.module.scss";

export const SignCardsArea = () => (
  <div className={styles.container}>
    <div className={styles.cards_container}>
      {signs.map(({ letter, image_url }, i) => (
        <SignCard title={letter} image={image_url} key={i} />
      ))}
    </div>
  </div>
);
