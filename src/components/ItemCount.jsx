import { useState, useContext } from "react"
import { cartContext } from "../context/cartContext"

function ItemCount ({product}) {
    const [count, setCount] = useState (0)
    const {addToCart} = useContext(cartContext)

const handleAdd = () => {
    setCount(count + 1)
}
const handleRemove = () =>{
    setCount(count - 1)
}

const handleAddTocart  = () =>{
    addToCart({...product, quantity: count})
}

return(
    <div>
        <p>{count}</p>
        <button onClick={handleRemove} >-1</button>
        <button onClick={handleAdd} > +1 </button>
        <button onClick={handleAddTocart}> Add to cart </button>
    </div>
)
}

export default ItemCount