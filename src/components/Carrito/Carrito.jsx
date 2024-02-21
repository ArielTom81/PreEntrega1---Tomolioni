import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import '../Item/Item.css'
import { Link } from 'react-router-dom';
import Button from '../commons/Button/Button';

const Carrito = () => {

  const { carrito, eliminarRemera, precioTotal, vaciarCarrito, eliminoUnaRemera} = useContext(CartContext);

  const handleVaciar = () =>{
    vaciarCarrito();
  }

  const handleEliminar = (id) =>{
    eliminarRemera(id);
  }

  const handleEliminarUna = (id) =>{
    eliminoUnaRemera(id)
  }

  return (
    <div>
      <h1>Carrito</h1>
      <div className='grid'>
      {
        carrito.map((prod) =>(
            <div className='producto'  key={prod.id}>
              <img className='producto__imagen' src={prod.picture} alt={prod.title}/>
              <div>
                <h3 className='producto__nombre'>{prod.title}</h3>
                <p className='producto__nombre'>Cantidad: {prod.cantidad}</p>
                <p className='producto__precio'>Precio Total: ${prod.price * prod.cantidad}</p>
                <Button className= 'boton navegacion__enlace' onClick={()=>handleEliminarUna(prod.id)}>Eliminar una </Button>
                <Button className='boton navegacion__enlace' onClick={()=>handleEliminar(prod.id)}>Eliminar todas</Button>
              </div>
            </div>
        ))
      }
      </div>
      {
        carrito.length > 0 ?
        <>
          <h2>Precio Total Carrito: ${precioTotal()}</h2>
          <Button> <Link className='navegacion__enlace' to="../Forms">Terminar Compra</Link></Button>
          <Button className='boton navegacion__enlace' onClick={handleVaciar}>Vaciar Carrito</Button>
        </>
        :
        <>
          <h2>El carrito está vacío</h2>
          <Button> <Link className='navegacion__enlace' to="/">Vamos a Comprar!!!!</Link></Button>
        </> 
      }
    </div>
  )
}

export default Carrito