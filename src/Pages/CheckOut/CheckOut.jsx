
import React, { useEffect,useState, useContext } from 'react';
import "./checkOut.css";
import { CardContext } from '../../Context/CardContextProvider';
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore} from "firebase/firestore";
import firebaseConfig from '../../services/firebaseConfig';
import Spinner from '../../components/Spinner/Spinner';

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
            setResCond(true)
        }catch(error){
            console.log(error)
        }
    }

    const [condicion, setCondicion] = useState(false);
    const [resCond, setResCond] = useState(false)
    let lol;
    let data;
    const handleSubmit = (e) =>{
        e.preventDefault()
        const day = new Date()
        const total = totalPrice()
        const items = cartList.map (e => {return {id: e.id,title: e.item, price: e.price, amount: e.quantity}})
        data = {day, buyer, items, total}
        lol = e.id
        console.log('total' ,data)
        generateOrder(data)
        setCondicion(true);
 
    }
    useEffect(() => {

    }, [condicion, resCond]);

    return (
        <div className='checkOut'>

            {condicion === false ? 
            <>
                <h1 className='title'>Finalizando Compra</h1>
                <form onSubmit={handleSubmit} className="formBuyer">
                <h2 className='subTitle'>Complete el formulario</h2>
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
                    <input type="submit" value="Finalizar Compra"  className='endShop'/>
                </form>
            </> 
            : 
            <>
                {resCond === false ? <div className='centred'><Spinner/></div> : 
                <>
                <h1 className='title'>Compra finalizada con exito</h1>
                <div className='recipt'>
                    <h2> Tu pedido </h2>
                    <h3>A nombre de: {lol}</h3>
                </div>
                </>
                }
            </>
            }
        </div> 
    );
}
{/*  */}

export default CheckOut;