import React from 'react';
import "./NavBar.css";

function NavBar(props) {
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
        </div>
    );
}

export default NavBar;