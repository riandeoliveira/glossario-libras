import { Layout } from "../../components/Layout";
import { Helmet } from "react-helmet";
import styles from "./styles.module.scss";
import { InputBox } from "../../components/InputBox";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Página de cadastro
export const Register = () => (
  <Layout>
    <Helmet>
      <title>Cadastro | Glossário de LIBRAS</title>
    </Helmet>
    <div className={styles.card}>
      <h1 className={styles.title}>Crie sua conta</h1>
      <form className={styles.form}>
        <InputBox title="Nome" message="Insira seu nome" />
        <InputBox type="email" title="E-mail" message="Insira seu e-mail" />
        <InputBox
          type="email"
          title="Confirme seu e-mail"
          message="Insira seu e-mail novamente"
        />
        <InputBox type="password" title="Senha" message="Insira sua senha" />
        <InputBox
          type="password"
          title="Confirme sua senha"
          message="Insira sua senha novamente"
        />
        <Button type="submit" className={styles.button}>
          Cadastrar
        </Button>
        <div className={styles.account_question}>
          <span>Já tem uma conta?</span>
          <Link to="/login" className={styles.link}>
            Entre
          </Link>
        </div>
      </form>
    </div>
  </Layout>
);
