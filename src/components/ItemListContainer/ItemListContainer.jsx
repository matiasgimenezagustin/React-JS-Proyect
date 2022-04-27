import React from 'react';
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({greeting, lista}) {

    const extraerValorCarrito = (valorDelCarrito) =>{

        return console.log(valorDelCarrito);
        
    }
    
    return (
        <div className='catalogo'>
            <ItemCount initial="1" stock="5" onAdd={extraerValorCarrito}/>

{/*usamos el .map para renderizar un arr que pasamos como prop en el app. Se pone el ? por que la funcion no esta definida
            {lista?.map(m => <p>{m}</p>)} */}

            {greeting ? greeting : "Este contenedor aun se encuentra vacio"}

        </div>
    );
}

export default ItemListContainer;