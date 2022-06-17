import styles from "./styles.module.scss";

export const SignCard = ({ image, title }) => (
  <div className={styles.card}>
    <img
      src={image}
      alt="Letra do alfabeto na Linguagem Brasileira de Sinais"
    />
    <h3 className={styles.title}>{title}</h3>
  </div>
);
