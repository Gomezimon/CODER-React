import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "./asyncMock";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
function ItemListContainer({mensaje}) {
    const [products, setProducts] = useState([])
    
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(Response => {
                setProducts(Response)
            })
            .catch(error => {
                console.error (error)
            })
    }, [categoryId])


    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList products={products}/>
        </div>
    )


}

export default ItemListContainer;