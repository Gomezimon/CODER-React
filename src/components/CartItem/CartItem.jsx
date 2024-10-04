import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, img, price, quantity }) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div className='CartItem'>
            <figure><img className='cartImg' alt='camiseta' src={img}/></figure>
            <div className='CartDetailItem'>
                <h4>{name}</h4>
                <p>| Precio: ${price}</p>
                <p>| Cantidad: {quantity}</p>
                <p>| Total: ${price * quantity}</p>
            </div>
            <button onClick={() => removeItem(id)} className='removeItem'>Eliminar</button>
        </div>
    )
}

export default CartItem;
