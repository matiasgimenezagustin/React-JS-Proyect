import React from 'react';
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
    return (
        <div className='catalogo'>
            {greeting ? greeting : "Este contenedor aun se encuentra vacio"}
        </div>
    );
}

export default ItemListContainer;