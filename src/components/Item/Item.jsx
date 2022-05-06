import React from 'react';
import "./item.css";
import {Link} from "react-router-dom";

function Item({ id, title, img, price}) {

    console.log(id)
    return (
        <div className='itemCard'>
            <h3>
                {title}
            </h3>
            <img src={img} />
            <h4>{price}$</h4>
            <Link to={"/item/" + id}> ver detalle</Link>
        </div>
    );
}

export default Item;