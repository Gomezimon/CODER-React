import "./ItemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, img, category,  price, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, description, img
        }
        addItem(item, quantity)
    }


    return (
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <img src={img} alt={name} className="ItemImg" />
            <section>
                <p className="Info">
                    {description}
                </p>
                <p className="Info">
                    <strong>Precio: ${price}</strong>
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to= '/cart' className="ButtonTerminar">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;