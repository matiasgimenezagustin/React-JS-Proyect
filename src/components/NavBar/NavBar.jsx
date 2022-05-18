import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import CardWidget from '../CardWidget/CardWidget';


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
            <CardWidget></CardWidget>
        </div>
    );
}

export default NavBar;