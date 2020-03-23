import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import TopBanner from '../TopBanner/TopBanner';

const Header = () => {
    return (
        
        <div>
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
        <TopBanner></TopBanner>
        <div>
       
        <div className="menu-button">

           <nav>
                <a className="menu-nav" href="/breakfast">Breakfast</a> 
                <a className="menu-nav" href="/lunch">Lunch</a> 
                <a className="menu-nav" href="/dinner">Dinner</a> 
                <a className="menu-nav" href="/hello">Hello</a>
            </nav>  
            
            
        </div>
        </div>
        </div>
    
            
        
        
           

    );
};

export default Header;