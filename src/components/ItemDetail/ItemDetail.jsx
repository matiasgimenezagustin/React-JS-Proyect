import React from 'react';
import "./itemDetail.css";
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail({ item }) {

    const extraerValorCarrito = (valorDelCarrito) =>{

        const productsOfProducts = valorDelCarrito === 1 ? "producto" : "productos";

        const resultAlert = `Agregaste ${valorDelCarrito} ${productsOfProducts} al carrito`;

        return alert(resultAlert);
        
    }

    return (
        <div className='itemDetail'>
            <h2 className='titleDetail'>{item?.title}</h2>
            <img src={item?.image} alt="Imagen de dev" />
            <div className='detail'>
                <h3> Categoria: {item?.categoria}</h3>
                <h3> Precio: {item?.price}</h3>
                <h3>{item?.descripcion}</h3>
                <ItemCount initial={1} stock={item?.stock} onAdd={extraerValorCarrito}/>
            </div>
        </div>  
    );
}

export default ItemDetail;