import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import styles from "./styles.module.scss";

// Página de login
export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => console.log(data);

  return (
    <>
      <Helmet>
        <title>Login | Glossário de Libras</title>
      </Helmet>
      <div className={styles.layout}>
        <div className={styles.card}>
          <h1 className={styles.title}>Entre na sua conta</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
            <InputBox
              type="email"
              title="E-mail"
              message="Insira seu e-mail"
              onSubmitData={register("email")}
            />
            <InputBox
              type="password"
              title="Senha"
              message="Insira sua senha"
              onSubmitData={register("password")}
            />
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
};
