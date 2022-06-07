import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div>
            <h1 className='title'>Bienvenido a Chill Store</h1>
            <div className='listCatalogo'>
                
                {products.map((product) => {
                    return(
                        <Item 
                        key={product.id} 
                        id={product.id}
                        title={product.title} 
                        img={product.img}
                        price={product.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ItemList;