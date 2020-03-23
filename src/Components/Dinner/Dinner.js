import React, { useState } from 'react';
import dinnerDataLoad from '../Fooddata/DinnerDataLoad';


const Dinner = (props) => {
    const dinnerData= dinnerDataLoad;
    const [dinners, setdinners]=useState(dinnerData);
    

 const {key, name, img, category, price}= props.dinner;
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

export default Dinner;