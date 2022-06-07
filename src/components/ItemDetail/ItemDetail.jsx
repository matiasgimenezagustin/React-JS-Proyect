
import React, { useEffect, useState } from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {useCardContext} from '../../Context/CardContextProvider';
import swal from 'sweetalert';

const ItemDetail = ({ item }) => {

    const { addToCart } = useCardContext();

    const [detailLoader, setDetailLoader] = useState(false);

    const extraerValorCarrito = (valorDelCarrito) =>{

        let title = item.title;

        addToCart(title, valorDelCarrito, item.price, item.id);
        
        const productsOfProducts = valorDelCarrito === 1 ? "producto" : "productos";

        const resultAlert = `Agregaste ${valorDelCarrito} ${productsOfProducts} al carrito`;

        setDetailLoader (true);

        return swal({
            title: "Chill Store dice:",
            text: resultAlert,
            icon: "success",
            button: "aceptar",
            timer: 3000
        });
    }

    return (
        <div className='itemDetail'>
            <div className='titleDetailContainer'>
                <h2 className='titleDetail'>{item?.title}</h2>
            </div>
            <div className='imgContainer'>
                <img src={item?.img} className="img" alt="Imagen de dev" />
            </div>
            <div className='detail'>
                <div className='allDescription'>
                    <h3> Categoria: {item?.categoria}</h3>
                    <h3> Precio: ${item?.price}</h3>
                    <p className='description'>{item?.descripcion}</p>
                </div>
                {
                detailLoader === false 
                ? 
                <ItemCount  initial={1} stock={item?.stock} onAdd={extraerValorCarrito}/>
                : 
                <div className='btnDetailContainer'>
                    <Link to="/" className='buttonAddCart' >Volver a la tienda</Link>
                    <Link to="/cart" className='buttonAddCart' >Terminar compra</Link>
                </div>
                }
            </div>
        </div>  
    );
}

export default ItemDetail;