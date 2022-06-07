
import React, { useState, useContext } from 'react';
import './checkOut.css';
import { CardContext } from '../../Context/CardContextProvider';
import { initializeApp } from 'firebase/app';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import firebaseConfig from '../../services/firebaseConfig';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    initializeApp(firebaseConfig);
    
    const [load, setLoad] = useState(false);

    const [orderID, setOrderID] = useState();

    const [finalPrice, setFinalPrice] = useState();

    const db = getFirestore();

    const {cartList, totalPrice, emptyCart} = useContext(CardContext);

    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    });

    const {Nombre, Email, Telefono} = buyer;

    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    };

    const generateOrder = async(data) =>{
        try{
            const col = collection(db , 'Orders');
            const order = await addDoc(col, data,);
            console.log("order", order);
            console.log("order", order.id) ;
            setOrderID(order.id);
            emptyCart();
        }catch(error){
            console.log(error);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const day = new Date();
        const total = totalPrice();
        setFinalPrice(total);
        const items = cartList.map (e => {return {id: e.id,title: e.item, price: e.price, amount: e.quantity}});
        const data = {day, buyer, items, total};
        generateOrder(data);
        setLoad(true);
    }

    return (
        <div className='checkOut'>
            {load === false ? 
            <>
                <h1 className='title'>Finalizando Compra</h1>
                <form onSubmit={handleSubmit} className='formBuyer'>
                    <h2 className='subTitle'>Complete el formulario</h2>
                        <input 
                        className='input'
                        type='text'
                        name='Nombre'
                        placeholder='Nombre'
                        value={Nombre}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input 
                        className='input'
                        type='text'
                        name='Telefono'
                        placeholder='Telefono'
                        value={Telefono}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input 
                        className='input'
                        type='email'
                        name='Email'
                        placeholder='Email'
                        value={Email}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input type='submit' value='Finalizar Compra' className='endShop'/>
                </form>
            </> 
            : 
            <>
                {orderID === undefined ? <div className='centred'><Spinner/></div> : 
                <>
                <h1 className='title'>Compra finalizada con exito</h1>
                <div className='recipt'>
                    <h2 className='reciptTitle'> Tu pedido </h2>
                    <h3>Id de compra: {orderID}</h3>
                    <h3>A nombre de: {buyer.Nombre}</h3>
                    <h3>Precio final: ${finalPrice} ARS</h3>
                    <Link to="/" className='btnEnd'>
                        Volver a la tienda
                    </Link>
                </div>
                </>
                }
            </>
            }
        </div> 
    );
}

export default CheckOut;