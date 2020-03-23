import React from 'react';
import './Lunch.css';
import lunchDataLoad from '../Fooddata/LunchDataLoad';

const Lunch = (props) => {
       
    const {key, name, img, category, price}= props.lunch;

    return (
        <div className="breakfast-cart">
            <div className="card text-center card-area" id="b-card">
                <img src={img} className="card-img-top" alt=""/>
                <h4 className="class-title"> {name}</h4>
                <h5> $ {price}</h5>

            </div>
        </div>
    );
    
};

export default Lunch;