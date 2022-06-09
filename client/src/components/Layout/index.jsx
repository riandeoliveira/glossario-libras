import styles from "./styles.module.css";

export default function Layout(props) {
  return <div className={styles.layout_container}>{props.children}</div>;
}
