
import React, { useEffect, useState } from 'react';
import "./itemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";



function ItemDetail({ item }) {

    const [condicion, setCondicion] = useState(false)

    let quantity;

    const extraerValorCarrito = (valorDelCarrito) =>{

        const productsOfProducts = valorDelCarrito === 1 ? "producto" : "productos";

        const resultAlert = `Agregaste ${valorDelCarrito} ${productsOfProducts} al carrito`;

        setCondicion (true);

        quantity = valorDelCarrito

        return alert(resultAlert);
        
    }
    useEffect(() => {
        return () => {
        }
    }, [condicion]);

    return (
        <div className='itemDetail'>
            <h2 className='titleDetail'>{item?.title}</h2>
            <img src={item?.image} alt="Imagen de dev" />
            <div className='detail'>
                <h3> Categoria: {item?.categoria}</h3>
                <h3> Precio: {item?.price}</h3>
                <h3>{item?.descripcion}</h3>
                {condicion === false ? <ItemCount  initial={1} stock={item?.stock} onAdd={extraerValorCarrito}/> : <Link to="/cart" className='buttonAddCart' quantityToAdd={quantity}>Terminar compra</Link>}
                
                
            </div>
        </div>  
    );
}

export default ItemDetail;