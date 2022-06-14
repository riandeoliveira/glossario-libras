import { Helmet } from "react-helmet";
import * as S from "../../styles/form-card";
import { InputBox } from "../../components/InputBox";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Login = () => (
  <>
    <Helmet>
      <title>Login | Glossário de LIBRAS</title>
    </Helmet>
    <S.Card>
      <h1>Entre na sua conta</h1>
      <form>
        <InputBox email name="E-mail" message="Insira seu e-mail" />
        <InputBox password name="Senha" message="Insira sua senha" />
        <S.Button>
          <Button submit>Entrar</Button>
        </S.Button>
        <S.Question>
          <span>Não tem uma conta?</span>
          <Link to="/cadastro">Cadastre-se</Link>
        </S.Question>
      </form>
    </S.Card>
  </>
);
