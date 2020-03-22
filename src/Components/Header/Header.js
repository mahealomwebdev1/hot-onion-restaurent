import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        
           <div className="header">
           <div className="header-img"> <img src={logo} alt=""/></div>
           <div className="header-nav">
           <nav>
                 <button className="button"><FontAwesomeIcon icon={faShoppingCart} /> </button>
                <a className="header-login" href="/">Login</a>
                <button className="header-signout">Sign Out</button>
            </nav>
           </div>
           
        </div>
        
           

    );
};

export default Header;