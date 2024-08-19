import carritoImg from "../img/carrito.png";


function CartWidget (){
    return <>
        <img style={{width: '70px'}} src= {carritoImg} alt="Icono Carrito" />
            <p>7</p>
    </>
}

export default CartWidget;