import React from 'react'
import '../../App.css'
import './Nosotros.css'

const Nosotros = () => {
return (
    <div>
    <div className='contenedor'>
        <h1>Nosotros</h1>
        <div className='carrito'>
            <div className='carrito__contenido'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam perferendis nobis quia nesciunt.
                    Corporis, assumenda autem. Molestiae recusandae perferendis reiciendis enim dolores explicabo, blanditiis
                    quis! Sequi, quidem. Necessitatibus doloremque soluta fugit ipsum illo expedita possimus fugiat, odit saepe
                    officia, praesentium sunt velit ex hic minima ullam eum neque! Sapiente, eos!
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam perferendis nobis quia nesciunt.
                    Corporis, assumenda autem. Molestiae recusandae perferendis reiciendis enim dolores explicabo, blanditiis
                    quis! Sequi, quidem. 
                </p>
            </div>
            <img src='./assets/img/nosotros.jpg' alt='carrito imagen' className='carrito__imagen'/>
        </div>
    </div>
    <section className='contenedor comprar'>
        <h2 className='comprar__titulo'>¿Porqué comprar con nosotros?</h2>
        <div className='bloques'>
            <div className='bloque'>
                <img className='bloque__imagen' src='./assets/img/icono_1.png' alt='porque comprar'/>
                <h3 className='bloque__titulo'>El mejor precio</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam perferendis nobis quia nesciunt.
                    Corporis
                </p>
            </div> 

            <div className='bloque'>
                <img className='bloque__imagen' src='./assets/img/icono_2.png' alt='porque comprar'/>
                <h3 className='bloque__titulo'>Para Devs</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam perferendis nobis quia nesciunt.
                    Corporis
                </p>
            </div>

            <div className='bloque'>
                <img className='bloque__imagen' src='./assets/img/icono_3.png' alt='porque comprar'/>
                <h3 className='bloque__titulo'>Envío gratis</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam perferendis nobis quia nesciunt.
                    Corporis
                </p>
            </div>

            <div className='bloque'>
                <img className='bloque__imagen' src='./assets/img/icono_4.png' alt='porque comprar'/>
                <h3 className='bloque__titulo'>La mejor calidad</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam perferendis nobis quia nesciunt.
                    Corporis
                </p>
            </div> 
        </div>
    </section>
    </div>
)
}

export default Nosotros