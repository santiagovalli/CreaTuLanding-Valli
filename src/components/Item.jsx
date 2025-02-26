import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';



function Item({ products }) {
    return (
        <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={products.thumbnail} />
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                   
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item> {products.stock} left</ListGroup.Item>
                        <ListGroup.Item>⭐{products.rating}</ListGroup.Item>
                        <ListGroup.Item>${products.price}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" as={Link}to={`/item/${products.id}`} >Ver mas</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item