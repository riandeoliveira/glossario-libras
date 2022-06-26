import { Helmet } from "react-helmet";
import styles from "./styles.module.scss";
import { InputBox } from "../../components/InputBox";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Página de login
export const Login = () => (
  <>
    <Helmet>
      <title>Login | Glossário de Libras</title>
    </Helmet>
    <div className={styles.layout}>
      <div className={styles.card}>
        <h1 className={styles.title}>Entre na sua conta</h1>
        <form className={styles.form}>
          <InputBox type="email" title="E-mail" message="Insira seu e-mail" />
          <InputBox type="password" title="Senha" message="Insira sua senha" />
          <Button type="submit" className={styles.button}>
            Entrar
          </Button>
          <div className={styles.account_question}>
            <span>Não tem uma conta?</span>
            <Link to="/cadastro" className={styles.link}>
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  </>
);
