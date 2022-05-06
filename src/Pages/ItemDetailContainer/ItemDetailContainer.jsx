import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


function getItem(id) {

    const myPromise = new Promise((resolve, reject) => {

    const products = [
        {
        id: 0,
        image: "https://josefacchin.com/wp-content/uploads/2016/02/landing-page-wordpress.png",
        title:"Landing Page",
        categoria: "Development",
        descripcion: "Tu producto en solo una pagina",
        price : 15000,
        stock : 3,
        },
        {
            id: 1,
            image: "https://marketing4ecommerce.net/wp-content/uploads/2020/11/nueva-portada-enero-1-6.jpg",
            title:"Web Desing",
            categoria: "Desing",
            descripcion: "Alcanza tus objetivos con una buena imagen",
            price : 10000,
            stock : 5,
        },
        {
            id: 2,
            image: "https://www.cronista.com/files/image/319/319739/60140d74c99af.jpg",
            title: "E-Commerce",
            categoria: "Development",
            descripcion: "Desarrolla tu negocio en el mundo digital",
            price : 70000,
            stock : 4,
        }
    ];

    const item = products.filter( item => item.id == id);
    console.log(item)
        setTimeout(() => {
            resolve(item[0])
        }, 2000)
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