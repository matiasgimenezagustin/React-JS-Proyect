import React from 'react';
import { useCardContext } from '../../Context/CardContextProvider';

const CartItem = ({item}) => {

    const {deleteById} = useCardContext();

    return (
        <div className='cartItem'>
            <h2>{item.item}</h2>
            <h3>unidades: {item.quantity}</h3>
            <h3>precio unitario: ${item.price}</h3>
            <button className='btnEnd' onClick={() => deleteById(item.id)}>X</button>
        </div>
    );
}

export default CartItem;