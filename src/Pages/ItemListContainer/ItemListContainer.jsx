import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import ItemList from '../../components/ItemList/ItemList';
import products from '../../Products/products';
import { useParams } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query, where, limit} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyC6p4_ATrCXOMQmPPQ73PwUOckcfvzE2z0",
  authDomain: "react-store-a7d4c.firebaseapp.com",
  projectId: "react-store-a7d4c",
  storageBucket: "react-store-a7d4c.appspot.com",
  messagingSenderId: "843615803039",
  appId: "1:843615803039:web:0177d57359422e0861f4aa"
};

initializeApp(firebaseConfig);


function getProducts (categoria) {
    

    const myPromise = new Promise((resolve) => {

        const emptyFilter = () => categoria ? products.filter(product => product.categoria.toLowerCase() === categoria) : products;
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
        /* const q = query(
            itemCollection,
            where("price", ">", 600)
        )

        const db = getFirestore();

        const itemCollection = collection(db, "items")
        getDocs(q)
            .then(snapshot =>{
                console.log(snapshot.docs.map(doc => {
                    return{...doc.data(), doc: doc.id}
                }))
            }) */
            

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