import React from 'react';
import "./item.css"

function Item({ title, img, price}) {
    return (
        <div className='itemCard'>
            <h3>
                {title}
            </h3>
            <img src={img} />
            <h4>{price}$</h4>
        </div>
    );
}

export default Item;