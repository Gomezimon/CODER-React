import './Cart.css'
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getFirestore,addDoc } from 'firebase/firestore';
import { updateStock } from "../../services/firebase/firebaseServices"


const Cart = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    });

    const [error, setError] = useState({})

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    const navigate = useNavigate ()

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault()
        const localError = {}

        if (!buyer.name) {
            localError.name = "El nombre es obligatorio"
        }

        if (!buyer.email) {
            localError.email = "El email es obligatorio"
        }

        if (Object.keys(localError).length === 0) {
            addToCart()
        } else {
            setError(localError)
        }
    }
    const addToCart = () => {
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const purchase = {
            buyer,
            products: cart,
            total: total,
            date: new Date()
        }

        

        addDoc(orderCollection, purchase)
        .then((res) => {
            cart.forEach(item => {
                updateStock(item.id, item.quantity)
            })
            clearCart();
            
            navigate('/checkout', {state: { orderId: res.id}})
        })
        .catch((error) => {
            console.error("No se pudo crear la orden")
        })
    }

    if (totalQuantity === 0) {
        return (
            <div className='Container'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='GoBack'>Productos</Link>
            </div>
        );
    }

    return (
        <div className='totalContainer'>
            <h2>Mi carrito de compras</h2>
            <hr className='hrLines'/>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <div className='buttons'>
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            </div>
            <form className='Form' onSubmit={submit}>
                <div className='DivForm'>
                    <label htmlFor='name'>Ingrese nombre</label>
                    <input type="text" name='name' id='name' onChange={handleChange} value={buyer.name}/>
                    {error.name && <p className="error">{error.name}</p>}
                </div>
                <div className='DivForm'>
                    <label htmlFor="email">Ingrese email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={buyer.email}/>
                    {error.email && <p className="error">{error.email}</p>}
                </div>
                <button type='submit'>Crear Orden</button>
            </form>
        </div>
    );
};

export default Cart;

