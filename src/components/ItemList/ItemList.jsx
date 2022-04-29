import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"

function ItemList({ products }) {
    console.log("funciona", products)

    return (
        <div className='listCatalogo'>
            {products.map((product) => {
                return(
                    <Item 
                    key={product.id} 
                    title={product.title} 
                    img={product.image}
                    price={product.price}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;