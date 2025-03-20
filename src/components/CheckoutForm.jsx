import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/dataBase';
import { useNavigate } from 'react-router';

function CheckoutForm() {
    // const MySwal = withReactContent(Swal)

    const {cart, getTotal} = useContext(cartContext)
    const navigate = useNavigate()

    const handleSubmit =async (e) => {
        e.preventDefault()

        const form = e.target
        const formBasicEmail = form.formBasicEmail.value
        const formBasicName = form.formBasicName.value
        const formBasicPhoneNumber = form.formBasicPhoneNumber.value

        const order = {
            items: cart,
            user: {fullName: formBasicName, email: formBasicEmail, phone: formBasicPhoneNumber,},
            time: serverTimestamp(),
            total: getTotal(),
        }

        const id = await createOrder(order)

        

        Swal.fire ({
            title: 'Thanks for your purchase',
            text: `your purchase ID is: ${id}`,
        }).then (()=> navigate('/') )
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="Jusepe Anacleto Perez" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>phone number</Form.Label>
                <Form.Control type="text" placeholder="+1 813-123-5632"  required/>
            </Form.Group>
            <Button variant="dark" type="submit" className='m-2'>
                Finish purchase
            </Button>
        </Form>
    );
}

export default CheckoutForm;