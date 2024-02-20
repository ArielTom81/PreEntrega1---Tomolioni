import React from 'react'
import Button from '../commons/Button/Button'
import './ItemCount.css'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>
      <div className="item-count">
        <button className='item-button' onClick={handleRestar}>-</button>
        <h3>{cantidad}</h3>
        <button className='item-button' onClick={handleSumar}>+</button>
      </div>
      <Button onClick={handleAgregar}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount