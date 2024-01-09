import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div>
        <h1>Tienda de Remeras</h1>
        <h2> { greeting}</h2>
    </div>
  )
}

export default ItemListContainer