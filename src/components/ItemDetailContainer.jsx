
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail"
import { getProduct } from "../firebase/dataBase";

function ItemDetailContainer() {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        // fetch(`https://dummyjson.com/products/${id}`)
        //     .then(res => res.json())
        //     .then(res => setDetail(res));
        getProduct(id).then(res =>setDetail(res))
    }, [id])


    return (
        <ItemDetail detail={detail}/>
    )
}

export default ItemDetailContainer