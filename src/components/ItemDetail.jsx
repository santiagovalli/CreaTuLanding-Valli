import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

function ItemDetail ({detail}) {
    return(
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={detail?.image}/>
                <Card.Body>
                    <Card.Title>{detail?.name}</Card.Title>
                    <Card.Text>
                        {detail?.description}
                    </Card.Text>
                   
                    <ListGroup className="list-group-flush">                                                
                        <ListGroup.Item>${detail?.price}</ListGroup.Item>
                        <ListGroup.Item>  < ItemCount product={detail} />  </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        
    )
}

export default ItemDetail
