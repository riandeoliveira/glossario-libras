import styles from "./styles.module.scss";

export const GifCard = ({ gif, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <img src={gif} alt="" className={styles.gif} />
  </div>
);
