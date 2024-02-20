import { useEffect, useState, } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

import { doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [item, setItem] = useState([]);
  
useEffect(() => {
  const db = getFirestore()

  const oneItem = doc(db, "Remeras", `${id}`)
  getDoc(oneItem).then((snapshot) =>{
    if (snapshot.exists()) {
      const doc = {...snapshot.data(), id: snapshot.id}
      console.log(doc)
      setItem(doc)
    }
  })
}, [id])

  return (
    <div className='contenedor grid'>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer