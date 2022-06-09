import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css';

export default function CardHistoria(props) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.exp}
        </Card.Text>
        <Button variant="primary">Jogar</Button>
      </Card.Body>
    </Card>
  );
}
