import './Cart.css'
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='totalContainer'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <div className='buttons'>
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            </div>
            <form>
                <label htmlFor='name'>Ingrese nombre</label>
                <input type="text" name='name' id='name'/>
                <label htmlFor="email">Ingrese email</label>
                <input type="text" name="email" id="email" />
            </form>
            <Link to='/checkout' className='checkout'>Checkout</Link>
        </div>
    )
}

export default Cart;
