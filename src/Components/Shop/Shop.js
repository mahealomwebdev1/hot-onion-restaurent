import React from 'react';
import './Shop.css';
import Card from '../Card/Card';
import Breakfast from '../Breakfast/Breakfast';



const Shop = () => {
    return (
        <div>
        <div className="shop">
            <br/>
            <br/>
            <br/>
            <br/>
            <h1> Best food Waiting for your belly</h1>
        </div>
        <Breakfast></Breakfast>
        <Card></Card>
        </div>
    );
};

export default Shop;