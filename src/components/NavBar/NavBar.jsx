import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import CardWidget from '../CardWidget/CardWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className='nav'>
            <h2>
                Chill Store
            </h2>
            <ul className='navLinks'>
                <li>
                    <NavLink to='/'>Tienda</NavLink>
                </li>
                <li className='listItemNav' >
                    <button href="" className='btnCategory'>
                        <span>categorias</span>
                        <FontAwesomeIcon icon={faAngleDown} className='arrowNav'/>
                    </button>
                    <ul className='categoryNesting'>
                        <li>
                            <NavLink  to="/category/cocina">
                                Cocina
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/category/fitness">
                                Fitness
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/category/electro">
                                Electro
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/category/belleza">
                                Belleza
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <CardWidget/>
        </nav>
    );
}

export default NavBar;