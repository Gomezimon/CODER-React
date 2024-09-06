import { useState, useEffect } from "react";
import { getProducts } from "./asyncMock";
import ItemList from "./ItemList/ItemList";
import ItemCount from "./ItemCount/ItemCount";


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
            <ItemCount initial= {1} stock= {10} onAdd= {(quantity) => console.log ("cantidad agregada", quantity)} />
        </div>
    )


}

export default ItemListContainer;