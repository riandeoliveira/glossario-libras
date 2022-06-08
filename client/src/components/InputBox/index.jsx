import styles from "./styles.module.css";

export default function InputBox(props) {
  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{props.name}</label>
      <input
        type={props.email ? "email" : props.password ? "password" : "text"}
        className="form-control"
        placeholder={props.message}
        required
      />
    </div>
  );
}
