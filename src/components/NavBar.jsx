import logoImg from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import styles from "./NavBarStyle.module.css"
function NavBar (){
    return (
        <nav className= {styles.navBarr}>
            <ul>
                <li>
                    <Link to="/">
                        <img className= {styles.logoImg} src= {logoImg} alt="Logo de T-Shirt 10" />
                    </Link>
                </li>
                <div className={styles.categories}>
                    <NavLink to={`/category/ClubEuropa`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Clubes Europa</NavLink>
                    <NavLink to={`/category/SeleccionNacional`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Seleccion Nacional</NavLink>
                </div>
            </ul>
            <CartWidget/>
        </nav>
)};

export default NavBar;
