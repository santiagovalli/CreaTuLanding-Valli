import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import CartList from "./cartList"


function CartContainer() {
    const { cart } = useContext(cartContext)



    return (
        <div className="d-flex justify-content-center align-items-center">
            {cart.length === 0 ? <h1>Your cart is empty </h1>  : <CartList cart={cart}/> }


        </div>
    )
}

export default CartContainer