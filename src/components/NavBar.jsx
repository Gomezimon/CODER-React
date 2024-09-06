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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="Catalogo">Catalogo</Link>
                </li>
                <li>
                <Link to="Carrito">Carrito</Link>
                </li>
                <li>
                <Link to="Contacto">Contacto</Link>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
)};

export default NavBar;
