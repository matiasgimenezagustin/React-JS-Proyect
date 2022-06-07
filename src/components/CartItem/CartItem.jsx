import React from 'react';
import { useCardContext } from '../../Context/CardContextProvider';

const CartItem = ({item}) => {

    const {deleteById} = useCardContext();

    return (
        <div className='cartItem'>
            <div className='cartTitleItem'>
                <h2>{item.item}</h2>
            </div>
            <h3>Unidades: {item.quantity}</h3>
            <h3>Precio unitario: ${item.price} ARS</h3>
            <button className='btnEnd btnDelete' onClick={() => deleteById(item.id)}>X</button>
        </div>
    );
}

export default CartItem;