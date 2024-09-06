import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import {getProducById} from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    useEffect(() => {
        getProducById ('1')
            .then(Response => {
                setProduct(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;