import React from 'react';
import "./item.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";

const Item = ({ id, title, img, price}) => {
    return (
        <div className='itemCard'>
            <h3>
                {title}
            </h3>
            <img src={img} />
            <h4>Precio: ${price} ARS</h4>
            <Link className='detailBtn' to={"/item/" + id}>
                <h4 className='detailBtnText'>Ver detalle</h4>
                <FontAwesomeIcon icon={faArrowRightToBracket} className="detailBtnIcon" />
            </Link>
        </div>
    );
}

export default Item;