import "./CartWidget.css"
import carritoImg from "../../img/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to= '/cart' className="CartWidget">
            <img style={{width: '45px'}} src= {carritoImg} alt="cart-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;