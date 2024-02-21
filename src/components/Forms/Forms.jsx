import {useState, useContext} from 'react'
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import CartContext from '../../context/CartContext'
import '../Item/Item.css'
import './Forms.css'
import Button from '../commons/Button/Button'

const Forms = () => {

const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

const [orderId, setOrderId] = useState(null)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const db = getFirestore();

const handleSubmit = (e) =>{
    e.preventDefault()
    const ordersCollection = collection(db, "order")

    const order = {
        buyer: {
            name,
            email,
            phone
        },
        item: carrito.map(product=>({
            id: product.id, 
            title: product.title, 
            price: product.price,
            quantity: product.cantidad
        })),
        priceTotal: precioTotal(),
    }

    addDoc(ordersCollection, order).then(({ id }) =>{
        setOrderId(id);
        vaciarCarrito();
    })
}

if(orderId)  {
    return (
        <div className='container'>
            <h1>Muchas gracias por su compra!!!!</h1>
            <h3>Número de pedido: {orderId}</h3>
        </div>
    )
}

return (
    <>
        <h2>Enviando ordenes</h2>
        <form className='cart' onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre' onChange={(e)=> setName(e.target.value)} />
            <input type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
            <input type='number' placeholder='Telefono' onChange={(e)=> setPhone(e.target.value)} />
            <Button type='submit'>Enviar</Button>
        </form>
    </>
)
}

export default Forms