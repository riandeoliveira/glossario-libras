import styles from "./styles.module.css";

export default function Button(props) {
  // Se receber a prop submit o botão será de enviar, senão será um botão comum.

  return (
    <button
      type={props.submit ? "submit" : "button"}
      className={styles.button_container}
    >
      {props.children}
    </button>
  );
}
