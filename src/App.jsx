import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import ItemListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
function App (){
    return (

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="Catalogo" element={<Catalogo/>} />
                <Route path="Carrito" element={<Carrito/>} />
                <Route path="Contacto" element={<Contacto/>} />
            </Routes>
            <ItemListContainer mensaje = "Camisetas de tu seleccion favorita"/>
        </BrowserRouter>

    )
}

export default App;

//*ARREGLAR RUTAS, PAGINA PAGES VA FUERA DE COMPONENTS, DENTRO DE SRC