import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import ItemList from '../../components/ItemList/ItemList';
/* import getData from "../../services/getData"; */
import { useParams } from 'react-router-dom';



function getProducts (categoria) {

    const myPromise = new Promise((resolve) => {

        const products = [
            {
                id: 0,
                image: "https://josefacchin.com/wp-content/uploads/2016/02/landing-page-wordpress.png",
                title:"Landing Page",
                categoria: "development",
                price : 15000,
            },
            {
                id: 1,
                image: "https://marketing4ecommerce.net/wp-content/uploads/2020/11/nueva-portada-enero-1-6.jpg",
                title:"Web Desing",
                categoria: "desing",
                price : 10000,
            },
            {
                id: 2,
                image: "https://www.cronista.com/files/image/319/319739/60140d74c99af.jpg",
                title: "E-Commerce",
                categoria: "development",
                price : 70000,
            }
        ];
        const emptyFilter = () =>{
            if ( categoria == undefined){

                return products

            }else{

                const productsFiltered = products.filter(p => p.categoria == categoria)

                return productsFiltered
            }
        }
        setTimeout(() => {
            resolve(emptyFilter)
        }, 2000)
    });
    return myPromise
}


function ItemListContainer({}) {

    const { categoryId } = useParams();

    const [products, setProducts] = useState ([])

    useEffect (() => {

        getProducts(categoryId)

            .then((res) => setProducts(res))

            .catch((error) => console.log("no anda", error));

    }, [categoryId])



    
    return (
        <div className='catalogo'>

            <ItemList products={products} />

            {/* lo pongo en comentario porque el profe sugirio de momento no usarlo{greeting || "Este contenedor aun se encuentra vacio"} */}

        </div>
    );
}

export default ItemListContainer;