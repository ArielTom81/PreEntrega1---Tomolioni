import { Link } from 'react-router-dom';
import './CartWidget.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

function CartWidget() {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className='navegacion__enlace' to="/carrito">
        <AddShoppingCartIcon />
        <span className='cart-icon'>{cantidadEnCarrito() || ""}</span>
      </Link>
    </div>
    
  )
}

export default CartWidget