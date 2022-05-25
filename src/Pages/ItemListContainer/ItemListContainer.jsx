import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query, where, limit} from "firebase/firestore";
import firebaseConfig from '../../services/firebaseConfig';



function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ItemListContainer({}) {
    
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams();

    initializeApp(firebaseConfig);
    
    function getProducts (categoria) {
        const db = getFirestore();
        const itemCollection = collection(db, "items")
        const q = categoria && query(
            itemCollection,
            where("categoria", "==", capitalize(categoria)) 
        )
        return getDocs(q || itemCollection)
    }
    
    useEffect (() => {
        getProducts(categoryId)
            .then(snapshot =>{
                setProducts(snapshot.docs.map(doc => {
                    return {...doc.data(), id : doc.id}
                }))
                })
    }, [categoryId])

    return (
        <div className='catalogo'>

            <ItemList products={products} />

            {/* lo pongo en comentario porque el profe sugirio de momento no usarlo{greeting || "Este contenedor aun se encuentra vacio"} */}

        </div>
    );
}

export default ItemListContainer;