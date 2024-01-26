import './CartWidget.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function CartWidget() {
  return (
    <div>
      <AddShoppingCartIcon />
      <span className='cart-icon'>4</span>
    </div>
    
  )
}

export default CartWidget