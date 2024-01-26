import './ItemCount.css'
import {useState} from 'react'

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0)

    const suma = () => {
        setCantidad(cantidad + 1)
    }

    const resta = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1)
      }

    }

  return (
    <div className='item-count'>
        <button className='item-button' onClick={suma}>+</button>
        <h3>{cantidad}</h3>
        <button className='item-button' onClick={resta}>-</button>
    </div>
  )
}

export default ItemCount