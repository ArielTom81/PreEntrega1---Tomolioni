import CartWidget from '../CartWidget/CartWidgets'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navegacion">
        <button className="navegacion__enlace navegacion__enlace--activo">Tienda</button>
        <button className="navegacion__enlace">Nosotros</button>
        <div className="navegacion__enlace" >
          <CartWidget />
        </div>

    </div>
  )
}

export default NavBar