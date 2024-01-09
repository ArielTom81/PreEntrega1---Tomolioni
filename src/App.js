
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';


function App() {
  return (
    <>
    <div className='navegacion-carrito'>
      <NavBar />
      <ItemListContainer greeting={'Hola a todos'} />
    </div>
    </>
  );
}
export default App;
