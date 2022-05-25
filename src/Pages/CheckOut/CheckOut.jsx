
import React, { useState, useContext } from 'react';
import { CardContext } from '../../Context/CardContextProvider';
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore} from "firebase/firestore";
import firebaseConfig from '../../services/firebaseConfig';

function CheckOut(props) {

    initializeApp(firebaseConfig);
    const db = getFirestore();

    const {cartList, totalPrice} = useContext(CardContext);

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
    }
    const generateOrder = async(data) =>{
        try{
            const col = collection(db , 'Orders')
            const order = await addDoc(col, data,)
            console.log("order", order)
            console.log("order", order.id)
        }catch(error){
            console.log(error)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const day = new Date()
        const total = totalPrice()
        const items = cartList.map (e => {return {id: e.id,title: e.item, price: e.price, amount: e.quantity}})
        const data = {day, buyer, items, total}

        console.log('total' ,data)
        generateOrder(data)

    }

    return (
        <div>
            <h1>Finalizando Compra</h1>
            <br />
            <h4>Complete el formulario</h4>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name='Nombre'
                placeholder='Nombre'
                value={Nombre}
                onChange={handleInputChange}
                />
                <br />
                <input 
                type="text"
                name='Telefono'
                placeholder='Telefono'
                value={Telefono}
                onChange={handleInputChange}
                />
                <br />
                <input 
                type="email"
                name='Email'
                placeholder='Email'
                value={Email}
                onChange={handleInputChange}
                />
                
                <br />
                <input type="submit" value="Finalizar Compra" />
            </form>
        </div>
    );
}

export default CheckOut;