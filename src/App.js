import Nosotros  from './components/Nosotros/Nosotros.jsx';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import {Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx';
import Carrito from './components/Carrito/Carrito.jsx'
import Forms from './components/Forms/Forms.jsx'

function App() {


  return (
    <div className='navegacion-carrito'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route 
            path='/' 
            element={
              <ItemListContainer greeting={'Hola a todos'} /> 
              }
            />
          <Route 
            path='/category/:categoryTalle'
            element={<ItemListContainer />}
          />
          <Route className="route"
            path='/item/:id' 
            element={
              <ItemDetailContainer />
            } 
          />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='*' element={<div>ERROR 404: La página no existe</div>} />{/* acomodar esta para que se vea más linda*/}
        </Routes>
        </CartProvider>
    </div>
  );
}
export default App;
