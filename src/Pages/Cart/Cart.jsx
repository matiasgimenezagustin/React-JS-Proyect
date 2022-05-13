import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { useCardContext } from '../../Context/CardContextProvider';

function Cart() {
    const {cartList} = useCardContext()

    return (
        <div>
            {/* {cartList.map(item =><CartItem key={item.id} item={item.title}/>)} */}
        </div>
    );
}

export default Cart;