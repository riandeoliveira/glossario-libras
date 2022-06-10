import styles from './styles.module.css';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Glossário de LIBRAS | Login</title>
      </Helmet>
      <div className={styles.card_container}>
        <h1 className={styles.title}>Entre na sua conta</h1>
        <form className={styles.form}>
          <InputBox email name="E-mail" message="Insira seu e-mail" />
          <InputBox password name="Senha" message="Insira sua senha" />
          <div className={styles.button_container}>
            <Button submit>Entrar</Button>
          </div>
          <div className={styles.account_question}>
            <span>Não tem uma conta?</span>
            <Link to="/cadastro" className={styles.link}>
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
