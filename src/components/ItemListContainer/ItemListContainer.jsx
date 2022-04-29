import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import getData from "../../services/getData"

function ItemListContainer({greeting, lista}) {

    const extraerValorCarrito = (valorDelCarrito) =>{

        let resultAlert;

        valorDelCarrito === 1 ? resultAlert = `Agregaste ${valorDelCarrito} producto al carrito` : resultAlert = `Agregaste ${valorDelCarrito} productos al carrito`;

        return alert(resultAlert);
        
    }

    const [products, setProducts] = useState ([])


    useEffect (() => {
        getData.then((res) => setProducts(res));
        getData.catch((error) => console.log("no anda", error));
    }, [])
    
    return (
        <div className='catalogo'>
            <ItemList products={products} />
            <ItemCount initial="1" stock="5" onAdd={extraerValorCarrito}/>

{/*usamos el .map para renderizar un arr que pasamos como prop en el app. Se pone el ? por que la funcion no esta definida
            {lista?.map(m => <p>{m}</p>)} */}

            {greeting ? greeting : "Este contenedor aun se encuentra vacio"}

        </div>
    );
}

export default ItemListContainer;