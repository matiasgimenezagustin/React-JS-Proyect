import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

import {doc, getDoc, getFirestore} from "firebase/firestore"



function ItemDetailContainer(props) {

    const getItem = (id) => {

        const db = getFirestore();
        const itemRef = doc(db, "items" , id);

        return getDoc(itemRef)
    }

    const {id} = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        getItem(id)
            .then(snapshot =>{
                setItem({...snapshot.data(), id : snapshot.id});
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