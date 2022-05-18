import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import products from "../../Products/products"


function getItem(id) {



    const myPromise = new Promise((resolve, reject) => {

    const item = products.filter( item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0])
        }, 0)
    });
    return myPromise;
}

function ItemDetailContainer(props) {

    const {id} = useParams();

    const [item, setItem] = useState({});
    useEffect(() => {
        getItem(id)
            .then(res =>{
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert("Algo ocurrio mal")
            })
    }, [id]);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    );
}



export default ItemDetailContainer;