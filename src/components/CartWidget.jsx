import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { useNavigate } from 'react-router';

function CartWidget (){
  const {getQuantity} = useContext(cartContext)
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate ('/cart')
  }

  const total = getQuantity()
    return(
        <Button variant="primary" onClick={handleClick}>
        🛒 <Badge bg="secondary">{total}</Badge>
      </Button>
    )
}

export default CartWidget