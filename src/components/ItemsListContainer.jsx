import { useState, useEffect } from "react";
import { getProducts } from "./asyncMock";
import ItemList from "./ItemList/ItemList";


function ItemListContainer({mensaje}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(Response => {
                setProducts(Response)
            })
            .catch(error => {
                console.error (error)
            })
    }, [])

    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList products={products}/>
        </div>
    )


}

export default ItemListContainer;