import { Helmet } from "react-helmet";
import styles from "./styles.module.css";
import { InputBox } from "../../components/InputBox";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

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

        <div className={styles.button}>
          <Button submit>Cadastrar</Button>
        </div>
        <div className={styles.question}>
          <span>Já tem uma conta?</span>
          <Link to="/login" className={styles.link}>
            Entre
          </Link>
        </div>
      </form>
    </div>
  </>
);
