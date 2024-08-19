import ProfileCard from "./ProfileCard";
import ItemListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
function App (){
    return (
        <div>
            <NavBar/>
            <ItemListContainer mensaje = "Bienvenido"/>
            <ItemListContainer mensaje = "Tenemos disponibles la playera de tu equipo favorito"/>
        </div>
    )
}

export default App;

