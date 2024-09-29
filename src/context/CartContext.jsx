import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    useEffect(() => {
        const totalQuantityCalc = cart.reduce((total, product) => total + product.quantity, 0);
        setTotalQuantity(totalQuantityCalc);
    }, [cart]);

    useEffect(() => {
        const totalCalc = cart.reduce((total, product) => total + product.quantity * product.price, 0);
        setTotal(totalCalc);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

