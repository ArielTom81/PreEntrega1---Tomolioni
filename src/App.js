import './App.css';
// import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='navegacion-carrito'>
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
        {/* <ItemCount /> */}
        <Route className="route"
          path='/item/:id' 
          element={
            <ItemDetailContainer />
          } 
        />
      </Routes>
    </div>
  );
}
export default App;
