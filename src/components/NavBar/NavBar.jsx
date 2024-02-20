import CartWidget from '../CartWidget/CartWidgets';
import './NavBar.css';
import { Link } from 'react-router-dom'



function NavBar() {

    return (
      <ul className="navegacion">
        <li>
          <Link className="navegacion__enlace navegacion__enlace--activo"  to="/">Tienda</Link>
        </li>
        <li> <Link className="navegacion__enlace" to="../Nosotros">Nosotros </Link></li>
        <li className="navegacion__enlace" >
          <CartWidget />
        </li>
      </ul>
  )
}

export default NavBar