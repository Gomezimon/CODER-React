import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import {getProducById} from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const {ItemId} = useParams()

    useEffect(() => {
        getProducById (ItemId)
            .then(Response => {
                setProduct(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [ItemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;