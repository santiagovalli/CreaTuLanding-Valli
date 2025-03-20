import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';



function Item({ products }) {
    return (
       
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                   
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Price: ${products.price}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" as={Link}to={`/item/${products.id}`} >Detail</Button>

                </Card.Body>
            </Card>
        
    )
}

export default Item