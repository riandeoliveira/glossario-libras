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
  // <Card style={{ width: "10rem" }}>
  //   <Card.Img variant="top" src={props.image} />
  //   <Card.Body>
  //     <Card.Title>{props.letter}</Card.Title>
  //   </Card.Body>
  // </Card>
);
