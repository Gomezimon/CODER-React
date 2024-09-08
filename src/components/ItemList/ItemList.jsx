import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({ products = [] }) => {  // Asignamos un valor por defecto
    return(
        <div className='ListGroup'>
            {products.length > 0 ? (
                products.map(prod => <Item key={prod.id} {...prod} />)
            ) : (
                <p>No hay productos disponibles</p>  // Mensaje alternativo si no hay productos
            )}
        </div>
    )
}

export default ItemList;