import React from 'react';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';


const NavBar =  (props) => {
    return (
        <div className='nav'>
            <h2>
                React Store
            </h2>
            <ul>
                <li><NavLink  to="/category/development">Development</NavLink></li>
                <li><NavLink  to="/category/desing">Desing</NavLink></li>
            </ul>
            <FontAwesomeIcon className='cardWidget'icon={faCartShopping} />
        </div>
    );
}

export default NavBar;