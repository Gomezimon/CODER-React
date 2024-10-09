import "./CartWidget.css"
import carritoImg from "../../img/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className="CartWidget">
            <div className="CartIconContainer">
                <img className="CartImg" src={carritoImg} alt="cart-widget" />
                {totalQuantity > 0 && <span className="CartBadge">{totalQuantity}</span>}
            </div>
        </Link>
    );
}

export default CartWidget;
