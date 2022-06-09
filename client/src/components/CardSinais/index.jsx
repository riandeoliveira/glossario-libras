import Card from 'react-bootstrap/Card';

export default function CardSinais(props) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
