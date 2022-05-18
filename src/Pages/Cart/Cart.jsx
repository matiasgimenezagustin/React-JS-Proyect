import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { useCardContext } from '../../Context/CardContextProvider';

function Cart() {
    const {cartList, emptyCart, totalPrice} = useCardContext()
    console.log(cartList)
    return (
        <div>
            {cartList.map((item) =>
                (
                    <CartItem key={item.id} item={item} quantity={item.quantity}/>
                    )
                )}
                {cartList.length > 0 ?
                <>
                    <button onClick={()=> emptyCart()}>vaciar Carrito</button>
                    <h2>Precio total: ${totalPrice()}</h2>
                </>
                : <h1>Carrito Vacio</h1>}
        </div>
    );
}

export default Cart;