import * as S from "./styles";

export const StoryCard = ({ image, title, exp }) => (
  <S.Card>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <span>+ {exp} EXP</span>
  </S.Card>
  // <Card style={{ width: "10rem" }}>
  //   <Card.Img variant="top" src={props.image} />
  //   <Card.Body>
  //     <Card.Title>{props.title}</Card.Title>
  //     <Card.Text>{props.exp}</Card.Text>
  //     <Button variant="primary">Jogar</Button>
  //   </Card.Body>
  // </Card>
);
