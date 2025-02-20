import { useState, useEffect } from "react"

function ItemCount() {
    const [count, setCount] = useState (0)
    useEffect(() =>{
        console.log('se monto')
        

        return () =>{
            console.log('se desmonto')
        }
    }, [count] ) 


const handleAdd = () => {
    setCount(count + 1)
}
const handleRemove = () =>{
    setCount(count - 1)
}

return(
    <div>
        <p>{count}</p>
        <button onClick={handleRemove} >-1</button>
        <button onClick={handleAdd} > +1 </button>
    </div>
)
}

export default ItemCount