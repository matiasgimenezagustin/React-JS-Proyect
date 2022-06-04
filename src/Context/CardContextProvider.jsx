import {createContext,useContext, useState} from "react";

export const CardContext = createContext({})

export const useCardContext = () => useContext(CardContext);



function CardContextProvider({children}) {

    const [cartList, setCartList] = useState([]);

    

    const addToCart = (item, quantity, price, id, img)=>{
        
        const isInCart = (id) =>{

            return cartList.some((item) => item.id === id)
    
        }
        if(isInCart(id)){
            return setCartList(cartList.map(product => (product.id === id ? {...product, quantity : product.quantity + quantity} : product)))
        }
        else{
            setCartList([...cartList, {item, quantity, price, id, img}])
        }

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

        return cartList.reduce((total, item) => total + parseInt(item.quantity) * item.price, 0 );

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
            , unitsPerProucts
            }}>
            {children}
        </CardContext.Provider>
    );
}

export default CardContextProvider;