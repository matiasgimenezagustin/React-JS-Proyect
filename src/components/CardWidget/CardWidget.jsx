import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useCardContext } from '../../Context/CardContextProvider';
import './cartWidget.css'

const CardWidget = () => {

    const {totalCount} = useCardContext();

    return (
        <div>
            <Link to="/cart"  className='cartWidgetContainer'>
                <FontAwesomeIcon className='cardWidget'icon={faCartShopping} />
                <div className='counterContainer'>
                    {totalCount()}
                </div>
            </Link>
        </div>
    );
};

export default CardWidget;