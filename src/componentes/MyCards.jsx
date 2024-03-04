import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCards = ({ image, name, descripcion, color, raza }) => {
  return (
    <Card style="p-4"style={{ width: '17rem', height: '25rem' }} className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags color={color} raza={raza} />
      </Card.Body>
    </Card>
  );
};

export default MyCards;