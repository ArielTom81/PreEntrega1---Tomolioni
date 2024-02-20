import { useContext, useState } from 'react';
import '../Item/Item.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext';

const ItemDetail = ( {item} ) => {

  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const handleRestar = () => {
      cantidad > 0 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }
  return (
    <div className='producto'>
        <img className='producto__imagen' src={item.picture} alt={item.title}/>
        <div className='boton__contenedor'>
            <h3 className='producto__nombre'>{item.title}</h3>
            <p className='producto__precio'>${item.price}</p>
            <p className='producto__precio'>{item.description}</p>
            <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
              />
        </div>
    </div>
  )
}

export default ItemDetail