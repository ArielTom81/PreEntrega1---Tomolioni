import { createContext, useState} from "react";

const CartContext = createContext( );

export default CartContext;

export const CartProvider = ({children}) =>{
    const[carrito, setCarrito] = useState ([]);

    const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];

    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
    }else {
        nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0 )
    }

    const eliminarRemera = id => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    };


    const estaEnElCarrito = id => carrito && carrito.some(prod => prod.id === id);

	const eliminoUnaRemera = id => {
    if (estaEnElCarrito(id)) {
        const carritoElemento = carrito.find(prod => prod.id === id);
        if (carritoElemento.cantidad === 1) {
            eliminarRemera(id);
        } else {
            const cart = carrito;
            cart.map(prod => {
                if (prod.id === id) {
                    prod.cantidad -= 1;
                }
                return prod;
            });
            setCarrito([...cart]);
        }
    }
};

    const vaciarCarrito = () => {
    setCarrito([]);
    }

    return (<CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarRemera, eliminoUnaRemera} }>{children}</CartContext.Provider>
    )
}