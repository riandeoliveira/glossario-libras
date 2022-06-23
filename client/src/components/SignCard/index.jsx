import styles from "./styles.module.scss";

// Card de sinais da página Sinais
export const SignCard = ({ image, title }) => (
  <div className={styles.card}>
    <img src={image} alt="Letra do alfabeto da Língua Brasileira de Sinais" />
    <h3 className={styles.title}>{title}</h3>
  </div>
);
