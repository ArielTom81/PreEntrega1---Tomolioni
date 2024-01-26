import { pedirDatos, pedirDatosCategory } from '../../helpers/pedirDatos';
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams} from 'react-router-dom';
import Spinners from '../commons/Spinners/Spinners';

function ItemListContainer( {greeting}) {

const [productos, setProductos] = useState([]);
const {categoryTalle} = useParams();
const [isLoading, setIsLoading] = useState(false);


useEffect(() => {
    const fetchRemeras = async () =>{
      const filtrarTalle = categoryTalle ? pedirDatosCategory : pedirDatos
      setIsLoading(true);
      try {
        const res = await filtrarTalle(categoryTalle);
        setProductos(res);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchRemeras();
}, [categoryTalle, setIsLoading]);

  if(isLoading) return <Spinners isLoading={isLoading} />
  return (
    <div className='contenedor'>
      <h2> {greeting} </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer