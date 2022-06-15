import Card from "react-bootstrap/Card";
import * as S from "./styles";

export const SignCard = ({ image, letter }) => (
  <S.Card>
    <img
      src={image}
      alt="Letra do alfabeto na Linguagem Brasileira de Sinais"
    />
    <h3>{letter}</h3>
  </S.Card>
);
