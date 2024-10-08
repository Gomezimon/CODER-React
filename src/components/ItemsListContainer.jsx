import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import RandomImage from "./RandomImage/RandomImage";
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");

        let q;

        if (categoryId) {
            q = query(itemsCollection, where("category", "==", categoryId));
        } else {
            q = query(itemsCollection);
        }

        getDocs(q)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            })
    }, [categoryId]);

    return (
        <div className="ListContainer">
            <div className="ItemListContainer">
                <ItemList products={products} />
            </div>
            <div className="RandomImg">
                <RandomImage/>
            </div>
        </div>
    );
};

export default ItemListContainer;
