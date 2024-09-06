import logoImg from "../img/logo.png";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import styles from "../NavBarStyle.module.css"
function NavBar (){
    return (
        <nav className= {styles.navBar}>
            <ul>
                <li>
                    <img className= {styles.logoImg} src= {logoImg} alt="Logo de T-Shirt 10" />
                </li>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="Catalogo">Selecciones Nacionales</Link>
                </li>
                <li>
                <Link to="Carrito">Clubes de Europa</Link>
                </li>
                <li>
                <Link to="Contacto">Contacto</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
)};

export default NavBar;
