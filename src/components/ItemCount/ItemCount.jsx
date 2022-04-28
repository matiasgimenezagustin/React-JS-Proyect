import React, { useState, useEffect } from 'react';
import "./counter.css"

function ItemCount({initial, stock, onAdd}) {



    const [count, setCount] = useState(parseInt(initial));
    

/*     useEffect(() => {

        console.log("mounted")

        return () => {

            console.log("unmounted")

        }
    }, [count]); */


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
            {/* <button onClick={() => handleExtraer(document.querySelector("#input-" + id).value)}>Extraer</button> */}
            
        
        </div>
    );
}

export default ItemCount;