import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import "./NavBar.css";


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
            <CardWidget className="cardWidget"/>
        </div>
    );
}

export default NavBar;