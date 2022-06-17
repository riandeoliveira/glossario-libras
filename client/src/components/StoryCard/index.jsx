import styles from "./styles.module.scss";

export const StoryCard = ({ image, title, exp }) => (
  <div className={styles.card}>
    <img src={image} alt="" />
    <h3 className={styles.title}>{title}</h3>
    <span>+ {exp} EXP</span>
  </div>
);
