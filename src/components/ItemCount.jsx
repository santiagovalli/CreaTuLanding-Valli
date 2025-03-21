import { useState, useContext } from "react"
import { cartContext } from "../context/cartContext"

function ItemCount({ product }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(cartContext)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleRemove = () => {
        setCount(count - 1)
    }

    const handleAddTocart = () => {
        addToCart({ ...product, quantity: count })
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', borderRadius: '10px', padding: '20px', backgroundColor: '#E0F7FA' }}>

            <button onClick={handleRemove} style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#0288D1', color: 'white', border: 'none' }}>-1</button>

            <p style={{ fontSize: '20px', margin: '0' }}>{count}</p>

            <button onClick={handleAdd} style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#0288D1', color: 'white', border: 'none' }}>+1</button>

            <button onClick={handleAddTocart} style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#0288D1', color: 'white', border: 'none' }}>Add</button>
        </div>
    )
}

export default ItemCount