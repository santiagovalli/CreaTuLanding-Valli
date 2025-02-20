import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget (){
    return(
        <Button variant="primary">
        🛒 <Badge bg="secondary">0</Badge>
      </Button>
    )
}

export default CartWidget