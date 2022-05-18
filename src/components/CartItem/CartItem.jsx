import React from 'react';
import { useCardContext } from '../../Context/CardContextProvider';



function CartItem({item}) {
    const {deleteById} = useCardContext()
    return (
        <div>
            <h2>{item.item}</h2>
            <h3>unidades: {item.quantity}</h3>
            <h4>precio unitario: ${item.price}</h4>
            <button onClick={() => deleteById(item.id)}>X</button>
        </div>
    );
}

export default CartItem;