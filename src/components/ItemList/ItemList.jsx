import Item from '../Item/Item'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({productos}) => {
  return (
    <div>
        <h1>Tienda de Remeras</h1>
        <ul>
          <Link className='producto__precio' to='/category/Talles niños'>Talles Niños</Link>
          <Link className='producto__precio'  to='/category/Talles adultos'>Talles Adultos</Link>
        </ul>
        <div className='grid'>
            {productos.map((prod) => <Link style={{ textDecoration:'none' }} to={`/Item/${prod.id}`}> <Item producto={prod} key={prod.id} /> </Link>)
            }
        </div>
    </div>
  )
}

export default ItemList