import React, { useState } from 'react';
import './Breakfast.css';
import breakfastDataLoad from '../Fooddata/BreakFastDataLoad';

 
// const breakfastData= breakfastDataLoad;
// const [breakfasts, setBreakfasts] =useState(breakfastData);



const Breakfast = (props) => {
    const { name, img, category, price}= props.breakfast;

   
    return (
        <div className="breakfast-cart">
            <div className="card text-center card-area" id="b-card">
                <img src={img} className="card-img-top" alt=""/>
                <h4 className="class-title"> {name}</h4>
                <h5> $ {price}</h5>

            </div>
{/* 
            <div>
           
            {
                breakfasts.map(breakfast => <Breakfast breakfast={breakfast}></Breakfast>)
            }
        </div> */}
        </div>
    );
};

export default Breakfast;