import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ItemListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDeteailContainer";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import "./App.css"
import Checkout from "./components/Checkout/Checkout";


function App (){
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element= {<ItemListContainer/>} />
                    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                    <Route path="/item/:ItemId" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                <Footer/>
            </CartProvider>
        </BrowserRouter>

    )
}

export default App;
