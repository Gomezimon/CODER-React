import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className='divContainer'>
            <article className="CardItem">
                <figure>
                    <img src={img} alt={name} className="ItemImg" />
                </figure>
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                <section className='ItemInfo'>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock Disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/Item/${id}`} className='BotonDetalles'>Ver Detalles</Link>
                </footer>
            </article>
        </div>
    )
}

export default Item