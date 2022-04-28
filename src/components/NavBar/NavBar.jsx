import React from 'react';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


const NavBar =  (props) => {
    return (
        <div className='nav'>
            <h2>
                React Store
            </h2>
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <FontAwesomeIcon className='cardWidget'icon={faCartShopping} />
        </div>
    );
}

export default NavBar;