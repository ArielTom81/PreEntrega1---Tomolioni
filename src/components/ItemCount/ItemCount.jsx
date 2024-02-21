import React from 'react'
import Button from '../commons/Button/Button'
import './ItemCount.css'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>
      <div className='item-count'>
        <Button className='item-button' onClick={handleRestar}>-</Button>
        <h3>{cantidad}</h3>
        <Button className='item-button' onClick={handleSumar}>+</Button>
      </div>
      <Button onClick={handleAgregar}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount