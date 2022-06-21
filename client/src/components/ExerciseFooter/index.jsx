import Button from "react-bootstrap/esm/Button";
import styles from "./styles.module.scss";

export const ExerciseFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Button primary>Próxima pergunta</Button>
    </div>
  </footer>
);
