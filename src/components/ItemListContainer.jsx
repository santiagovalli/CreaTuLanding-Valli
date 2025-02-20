import { useState, useEffect } from "react"
import Itemlist from "./ItemList";
import { useParams } from "react-router";

function ItemListContainer() {

    const [items, setItems] = useState([])
    const {categoryName} = useParams()

    useEffect(() => {
        const allProducts = 'https://dummyjson.com/products?limit=0&skip=171'
        const Bycategory = `https://dummyjson.com/products/category/${categoryName}`

        fetch(categoryName ? Bycategory : allProducts)
        // fetch( `https://dummyjson.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(res => setItems(res.products));
    }, [categoryName])

    return (
        <Itemlist items={items} />
    )
}

export default ItemListContainer