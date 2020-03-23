import React, { useState } from 'react';
import './Shop.css';
import breakfastDataLoad from '../Fooddata/BreakFastDataLoad';
import Breakfast from '../Breakfast/Breakfast';
import lunchDataLoad from '../Fooddata/LunchDataLoad';
import Lunch from '../Lunch/Lunch';
import dinnerDataLoad from '../Fooddata/DinnerDataLoad';
import Dinner from '../Dinner/Dinner';


const Shop = () => {
    
    const breakfastData= breakfastDataLoad;
    const [breakfasts, setBreakfasts] =useState(breakfastData);

    const lunchData= lunchDataLoad;
    const [lunches, setLunches]=useState(lunchData)

    const dinnerData= dinnerDataLoad;
    const [dinners, setdinners]=useState(dinnerData)
    return (
        <div>
                
    
         <div>
           
            {
                breakfasts.map(breakfast => <Breakfast breakfast={breakfast}></Breakfast>)
            }
        </div> 

        <div>
           
            {
                lunches.map(lunch => <Lunch lunch={lunch}></Lunch>)
            }
        </div>

        <div>
           
            {
                dinners.map(dinner => <Dinner dinner={dinner}></Dinner>)
            }
        </div>
        </div>
        
    );
};

export default Shop;