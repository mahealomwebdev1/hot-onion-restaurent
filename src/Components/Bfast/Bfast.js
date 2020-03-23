import React, { useState } from 'react';
import breakfastDataLoad from '../Fooddata/BreakFastDataLoad';
import Breakfast from '../Breakfast/Breakfast';

const Bfast = () => {
    
    const breakfastData= breakfastDataLoad;
    const [breakfasts, setBreakfasts] =useState(breakfastData);
    return (
        <div>
            
            
         <div>
           
           {
               breakfasts.map(breakfast => <Breakfast breakfast={breakfast}></Breakfast>)
           }
       </div> 
        </div>
    );
};

export default Bfast;