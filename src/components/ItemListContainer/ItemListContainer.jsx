import React, { useEffect, useState } from 'react';

import "./ItemListContainer.css";

import ItemList from '../ItemList/ItemList';

import getData from "../../services/getData";

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemListContainer({greeting, lista}) {

    

    const [products, setProducts] = useState ([])


    useEffect (() => {

        getData.then((res) => setProducts(res));

        getData.catch((error) => console.log("no anda", error));

    }, [])
    
    return (
        <div className='catalogo'>

            <ItemList products={products} />

            {/* <ItemCount initial="1" stock="5" onAdd={extraerValorCarrito}/> */}

{/*usamos el .map para renderizar un arr que pasamos como prop en el app. Se pone el ? por que la funcion no esta definida
            {lista?.map(m => <p>{m}</p>)} */}

            {greeting || "Este contenedor aun se encuentra vacio"}
            <ItemDetailContainer/>

        </div>
    );
}

export default ItemListContainer;