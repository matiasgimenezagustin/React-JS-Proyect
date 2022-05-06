import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


function getItem() {

    const myPromise = new Promise((resolve, reject) => {

        /* const product1 = new Product(0, "https://josefacchin.com/wp-content/uploads/2016/02/landing-page-wordpress.png", "Landing Page", "Tu producto en solo una pagina", "Development", 15000, 3);

    const product2 = new Product(1, "https://marketing4ecommerce.net/wp-content/uploads/2020/11/nueva-portada-enero-1-6.jpg", "Web Desing", "Alcanza tus objetivos con una buena imagen", "Desing", 10000, 5); */
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