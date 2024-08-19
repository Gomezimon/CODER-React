import logoImg from "../img/logo.png";
import CartWidget from "./CartWidget";
import styles from "../NavBarStyle.module.css"
function NavBar (){
    return (
        <nav className= {styles.navBar}>
            <ul>
                <li>
                    <a href="#">
                        <img className= {styles.logoImg} src= {logoImg} alt="Logo de T-Shirt 10" />
                    </a>
                </li>
                <li>
                    <a href="#">Catalogo</a>
                </li>
                <li>
                    <a href="#">Carrito</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
)};

export default NavBar;
