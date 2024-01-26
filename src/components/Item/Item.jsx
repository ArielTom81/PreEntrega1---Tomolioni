import React from 'react'
import './Item.css'

const Item = ( {producto} ) => {
  const {title, picture, price, category} = producto;
  return (
    <div className='producto'>
        <img className='producto__imagen' src={picture} alt={title}/>
        <div>
            <h4 className='producto__nombre'>{title}</h4>
            <p className='producto__precio'>${price}</p>
            <p className="producto__precio">{category}</p>
        </div>
    </div>
  )
}

export default Item