import { Helmet } from "react-helmet";
import styles from "./styles.module.scss";
import { InputBox } from "../../components/InputBox";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Register = () => (
  <>
    <Helmet>
      <title>Cadastro | Glossário de LIBRAS</title>
    </Helmet>
    <div className={styles.card}>
      <h1 className={styles.title}>Crie sua conta</h1>
      <form className={styles.form}>
        <InputBox name="Nome" message="Insira seu nome" />
        <InputBox email name="E-mail" message="Insira seu e-mail" />
        <InputBox
          email
          name="Confirme seu e-mail"
          message="Insira seu e-mail novamente"
        />
        <InputBox password name="Senha" message="Insira sua senha" />
        <InputBox
          password
          name="Confirme sua senha"
          message="Insira sua senha novamente"
        />
        <div className={styles.button_container}>
          <Button className={styles.button}>Cadastrar</Button>
        </div>
        <div className={styles.question_container}>
          <span>Já tem uma conta?</span>
          <Link to="/login" className={styles.link}>
            Entre
          </Link>
        </div>
      </form>
    </div>
  </>
);
