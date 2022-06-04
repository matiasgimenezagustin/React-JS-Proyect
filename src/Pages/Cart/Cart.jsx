import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { useCardContext } from '../../Context/CardContextProvider';
import { Link } from 'react-router-dom';
import './cart.css'

function Cart() {
    const {cartList, emptyCart, totalPrice} = useCardContext()
    return (
        <div className='cart'>
            {cartList.map((item) =>
                (
                    <CartItem key={item.id} item={item} quantity={item.quantity} />
                    )
                )}
                {cartList.length > 0 ?
                <div className='btnEndControls'>
                    <button className='btnEnd btnEmptyCart' onClick={()=> emptyCart()}>
                        vaciar Carrito
                    </button>
                    <h2 className='totalPrice'>Precio total: ${totalPrice()}</h2>
                    <Link to="/checkout" className='btnEnd btnEndSell'>
                            Finalizar Compra
                    </Link>
                </div>
                : <h1>Carrito Vacio</h1>}
        </div>
    );
}

export default Cart;