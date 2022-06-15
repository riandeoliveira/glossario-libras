import Card from "react-bootstrap/Card";

export const SignCard = (props) => (
  <Card style={{ width: "10rem" }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
    </Card.Body>
  </Card>
);
