import './Checkout.css'
import { useLocation, Link } from 'react-router-dom'

const Checkout = () => {
    const location = useLocation()
    const { orderId } = location.state || {}

    return (
        <div>
            <h1>¡Gracias por tu compra!</h1>
            {orderId ? (
                <p>Tu ID de orden es: <strong>{orderId}</strong></p>
            ) : (
                <p>No se encontró el ID de la orden.</p>
            )}
            <Link to='/'>Volver al inicio</Link>
        </div>
    );
};

export default Checkout;
