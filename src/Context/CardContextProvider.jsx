import {createContext,useContext, useState} from "react";

export const CardContext = createContext({})

export const useCardContext = () => useContext(CardContext);



function CardContextProvider({children}) {

    const [cartList, setCartList] = useState([]);

    const isInCart = (id) =>{

        return cartList.some(item => item.id === id)

    }

    const addToCart = (item, quantity)=>{

        if(isInCart(item.id)){
            return setCartList(cartList.map(product => product.id === item.id ? {...product, quantity : product.quantity + quantity} : product))
        }
        setCartList([...cartList, {...item, quantity}])
    }
    const emptyCart = ( ) => {
        setCartList([])
    }
    const deleteById = (id) =>{

        setCartList(cartList.filter((item) => item.id !== id));

    }

    const totalCount = ( ) =>{

        return cartList.reduce((total, item) => total + item.quantity, 0);

    }

    const totalPrice = ( ) =>{

        return cartList.reduce((total, item) => total + item.quantity * item.price, 0 );

    }

    const unitsPerProucts = (id) =>{

        return cartList.find(item => item.id === id ).quantity;

    }
    return (
        <CardContext.Provider value={{
            cartList
            , addToCart
            , totalCount
            , totalPrice
            , deleteById
            , emptyCart
            , unitsPerProucts}}>
            {children}
        </CardContext.Provider>
    );
}

export default CardContextProvider;