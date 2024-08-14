import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={`Imagen ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong> {ingredients}
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${price}
        </Card.Text>
        <div className='button-container'>
        <Button variant="light" className="me-2">Ver más</Button>
        <Button variant="dark">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

  