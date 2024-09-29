import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import {db} from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { ItemId } = useParams();

    useEffect(() => {
        if (ItemId) {
            const db = getFirestore();
            const docRef = doc(db, "Items", ItemId);
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setProduct({ id: snapshot.id, ...snapshot.data() });
                    }
                })
        }
    }, [ItemId]);

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;
