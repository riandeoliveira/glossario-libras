import { Helmet } from "react-helmet";
import * as S from "../../styles/form-card";
import { InputBox } from "../../components/InputBox";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Register = () => (
  <>
    <Helmet>
      <title>Cadastro | Glossário de LIBRAS</title>
    </Helmet>
    <S.Card>
      <h1>Crie sua conta</h1>
      <form>
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
        <S.Button>
          <Button submit>Cadastrar</Button>
        </S.Button>
        <S.Question>
          <span>Já tem uma conta?</span>
          <Link to="/login">Entre</Link>
        </S.Question>
      </form>
    </S.Card>
  </>
);
