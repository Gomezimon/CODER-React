import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Contacto from "./pages/Contacto";
import ItemListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDeteailContainer";
function App (){
    return (

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element= {<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:ItemId" element={<ItemDetailContainer/>} />
                <Route path="Contacto" element={<Contacto/>} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;

//*ARREGLAR RUTAS, PAGINA PAGES VA FUERA DE COMPONENTS, DENTRO DE SRC