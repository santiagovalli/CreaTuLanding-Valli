import { useState, useEffect } from "react"
import Itemlist from "./ItemList";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/dataBase";

function ItemListContainer() {

    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName){
            getProductsByCategory(categoryName).then(res => setItems(res))
        } else{
            getProducts().then(res => setItems(res))
        }
    }, [categoryName])

    return (
        <Itemlist items={items} />
    )
}

export default ItemListContainer