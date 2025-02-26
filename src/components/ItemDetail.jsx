import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

function ItemDetail ({detail}) {
    return(
        <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={detail?.thumbnail} />
                <Card.Body>
                    <Card.Title>{detail?.title}</Card.Title>
                    <Card.Text>
                        {detail?.description}
                    </Card.Text>
                   
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item> {detail?.stock} left</ListGroup.Item>
                        <ListGroup.Item>⭐{detail?.rating}</ListGroup.Item>
                        <ListGroup.Item>${detail?.price}</ListGroup.Item>
                        <ListGroup.Item>  < ItemCount/>  </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemDetail
