import './CartItem.css'

const CartItem = ({ id, name, price, quantity, removeItem }) => {
    return (
        <div className='CartItem'>
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem;
