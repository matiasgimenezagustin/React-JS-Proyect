import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


function getItem(id) {

    const myPromise = new Promise((resolve, reject) => {
        class Product{
            constructor (id, image, title, descripcion, categoria, price, stock){
                this.id = id;
                this.image = image;
                this.title = title;
                this.descripcion = descripcion;
                this.categoria = categoria;
                this.price = price;
                this.stock = stock;
            }
        }

        const product1 = new Product(0, "https://josefacchin.com/wp-content/uploads/2016/02/landing-page-wordpress.png", "Landing Page", "Tu producto en solo una pagina", "Development", 15000, 3);

        const product2 = new Product(1, "https://marketing4ecommerce.net/wp-content/uploads/2020/11/nueva-portada-enero-1-6.jpg", "Web Desing", "Alcanza tus objetivos con una buena imagen", "Desing", 10000, 5);

        const product3 = new Product(2, "https://www.cronista.com/files/image/319/319739/60140d74c99af.jpg", "E-Commerce", "Desarrolla tu negocio en el mundo digital", "Development", 70000, 4);

        const data = [product1, product2, product3];

    const item = data.filter( item => item.id == id);
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