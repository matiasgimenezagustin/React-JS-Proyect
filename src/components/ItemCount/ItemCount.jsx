import React, { useState } from 'react';
import './counter.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    return (
        <div className='counter'>
            <div>
                <button className='plusButton' onClick={() => setCount(count === parseInt(initial) ? parseInt(initial) : count - 1)}>
                -
                </button>
                <p>
                    {count}
                </p>
                <button className='plusButton' onClick={() => setCount(count === parseInt(stock) ? parseInt(stock) : count + 1)}>
                +
                </button>
            </div>
            <button className='addCart'  onClick={() => onAdd(count)}>
                agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;