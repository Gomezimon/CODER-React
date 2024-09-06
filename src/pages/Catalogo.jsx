import ArgentinaImg from "../img/jersey/argentina.jpg"
import ItemCount from "../components/ItemCount/ItemCount"
function Catalogo (){
    return(
        <div>
            <h1>Catalogo</h1>
            <div>
                <div>
                    <img src= {ArgentinaImg} alt="Jersey Argentina" />
                    <div>
                        <h3>Argentina</h3>
                        <p>Camiseta de la Asociacion de Fútbol Argentino | Disponible en todas las tallas</p>
                        <ItemCount initial= {1} stock= {10} onAdd= {(quantity) => console.log ("cantidad agregada", quantity)} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Catalogo;

