import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function CartList({ cart }) {
    return (
        <ListGroup className="w-50 m-4">
        {cart.map(prod =>

            <Container key={prod.id} className="d-flex align-items-center w-50">

                <Row className="d-flex align-items-center"  >

                    <ListGroup.Item className="d-flex align-items-center  " >

                        <img src={prod.image} width={100} height={100} alt="product" />
                        {prod.name} <br />
                        {prod.title} Quantity:{prod.quantity}

                        <CloseButton className="p-2" />
                        
                    </ListGroup.Item>

                </Row>

            </Container>
        )}
    <Button variant="primary" as={Link} to="/checkout" >Checkout</Button>
    </ListGroup>


    )
}

export default CartList

