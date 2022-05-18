import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { useCardContext } from '../../Context/CardContextProvider';

const CardWidget = () => {
    const {totalCount} = useCardContext()
    return (
        <div>
            <Link to="/cart">
                <FontAwesomeIcon className='cardWidget'icon={faCartShopping} />
            </Link>
            <span>{totalCount()}</span>
        </div>
    );
};

export default CardWidget;