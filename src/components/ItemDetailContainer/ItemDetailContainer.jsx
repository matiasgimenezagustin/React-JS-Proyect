import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function getItem() {

    const myPromise = new Promise((resolve, reject) => {
        const item = {
            id : 1,
            title : "E-Commerce",
            precio : "300$",
            stock : 3,
            url: "https://www.cronista.com/files/image/319/319739/60140d74c99af.jpg",
            categoria : "Development",
            descripcion : "Desarrolla tu negocio en el mundo digital",
        };
        setTimeout(() => {
            resolve(item)
        }, 2000)
    });
    return myPromise;
}

function ItemDetailContainer(props) {

    

    const [item, setItem] = useState({});
    useEffect(() => {
        getItem()
            .then(res =>{
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert("Algo ocurrio mal")
            })
    }, []);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;