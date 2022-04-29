import React from 'react';
import Item from '../Item/Item';

function ItemList({ products }) {
    console.log("funciona", products)

    return (
        <>
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
            <Item/>
        </>
    );
}

export default ItemList;