import { Helmet } from "react-helmet";
import styles from "./styles.module.css";
import { InputBox } from "../../components/InputBox";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Login = () => (
  <>
    <Helmet>
      <title>Login | Glossário de LIBRAS</title>
    </Helmet>
    <div className={styles.card}>
      <h1 className={styles.title}>Entre na sua conta</h1>
      <form className={styles.form}>
        <InputBox email name="E-mail" message="Insira seu e-mail" />
        <InputBox password name="Senha" message="Insira sua senha" />
        <div className={styles.button}>
          <Button submit>Entrar</Button>
        </div>
        <div className={styles.question}>
          <span>Não tem uma conta?</span>
          <Link to="/cadastro" className={styles.link}>
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  </>
);
