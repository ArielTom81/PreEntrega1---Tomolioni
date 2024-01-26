import '../Item/Item.css'
import './ItemDetail.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {item} ) => {
  return (
    <div className='producto'>
        <img className='producto__imagen' src={item.picture} alt={item.title}/>
        <div className='boton__contenedor'>
            <h3 className='producto__nombre'>{item.title}</h3>
            <p className='producto__precio'>${item.price}</p>
            <p className='producto__precio'>{item.description}</p>
            <button className='boton'> <ItemCount /> </button>
        </div>
    </div>
  )
}

export default ItemDetail