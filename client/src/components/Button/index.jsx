import * as S from "./styles";

// Botão das telas de login e cadastro
export const Button = ({ submit, children }) => (
  <S.Button type={submit ? "submit" : "button"}>{children}</S.Button>
);
