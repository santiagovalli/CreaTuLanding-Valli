import { cartContext } from "./cartContext";
import { useState } from "react";

function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{ //EVITAR DUPLICADOS POR EL AMOR DE DIOS!!!!!!!!!!
        setCart([...cart,product])
    }

    const getQuantity = () =>{
        const quantities = cart.map(product => product.quantity)
        const result = quantities.reduce ((acc, current )=> acc + current,0)

        return result
    }

    const getTotal = () =>{
        const prices = cart.map(product => product.price*product.quantity)
        const result = prices.reduce ((acc, current )=> acc + current,0)

        return result
    }

    return (
        <cartContext.Provider value={{addToCart, getQuantity, getTotal, cart}}>

            {children}

        </cartContext.Provider>
    )
}

export default CartProvider