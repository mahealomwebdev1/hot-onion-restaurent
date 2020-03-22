import React, { useState } from 'react';
import './Breakfast.css'
import breakFastData from '../BreakfastData';
import breakfastData from '../BreakfastData';
const Breakfast = () => {
    const totalBreakfast= breakfastData.slice(0,6);
    const [breakfast, setBreakfast]= useState(totalBreakfast);

    

    return (
       
        <div>
            <h1>Your breakfast is ready to serve</h1>

            <img src={breakfast.img} alt=""/>
        </div>
    );
};

export default Breakfast;

