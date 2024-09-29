import './CartItem.css'

const CartItem = ({ id, name, img, price, quantity, removeItem }) => {
    return (
        <div className='CartItem'>
            <h4>{name}</h4>
            <img className='cartImg' src={img}/>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
            <button onClick={() => removeItem(id)} className='removeItem'>Eliminar</button>
        </div>
    )
}

export default CartItem;
