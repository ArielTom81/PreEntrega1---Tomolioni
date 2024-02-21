import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams} from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer( {greeting}) {

const [productos, setProductos] = useState([]);
const categoryTalle = useParams().categoryTalle;

useEffect(() =>{
  const db = getFirestore()
  const itemsCollection = collection(db, "Remeras")
  const q = categoryTalle ? query(itemsCollection, where("category", "==", categoryTalle)) : itemsCollection;

  getDocs(q).then((snapshot) => {
    setProductos(snapshot.docs.map((doc) =>{
      return { ...doc.data(), id: doc.id}
    }))
    
  })
}, [categoryTalle])

  return (
    <div className='contenedor'>
      <h2> {greeting} </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer