import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import ItemListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDeteailContainer";
import NacionalTeams from "./pages/NacialTeams";
import EuropeTeams from "./pages/EuropeTeams";
function App (){
    return (

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:ItemId" element={<ItemDetailContainer/>} />
                <Route path="Contacto" element={<Contacto/>} />
            </Routes>
            <ItemListContainer mensaje = "Camisetas de tu seleccion favorita"/>
            <ItemDetailContainer/>
        </BrowserRouter>

    )
}

export default App;

//*ARREGLAR RUTAS, PAGINA PAGES VA FUERA DE COMPONENTS, DENTRO DE SRC