import React, { useEffect, useState } from 'react';

import "./ItemListContainer.css";

import ItemList from '../../components/ItemList/ItemList';

import getData from "../../services/getData";


function ItemListContainer({}) {

    

    const [products, setProducts] = useState ([])


    useEffect (() => {

        getData.then((res) => setProducts(res));

        getData.catch((error) => console.log("no anda", error));

    }, [])
    
    return (
        <div className='catalogo'>

            <ItemList products={products} />

            {/* lo pongo en comentario porque el profe sugirio de momento no usarlo{greeting || "Este contenedor aun se encuentra vacio"} */}

        </div>
    );
}

export default ItemListContainer;