import { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { pedirDatosId } from '../../helpers/pedirDatos';
import {useParams} from 'react-router-dom'
import Spinners from '../commons/Spinners/Spinners';

const ItemDetailContainer = () => {
  const itemId = useParams().id;
  const [item, setItem] = useState(null);
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
      pedirDatosId(Number(itemId))
      .then((res) => {
          setItem(res)
          setIsloading(false)
        })
}, [itemId])

  if(isLoading) return <Spinners isLoading={isLoading} />
  return (
    <div className='contenedor grid'>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer