import React from 'react';
import lunchdata from '../LunchData/index'
const Card = () => {
    return (
        <div className="card tex-center col-md-3">
            <div className="overflow">
                <img className="col-md-12" src={lunchdata.img} alt=""/> 
            </div>
            <div className="card-body text-center text-dark">
                <h3 className="cart-title"> Card Title {lunchdata.name}</h3>
                <p className="cart-text">How we dream about out future</p>
                <h5 className="cart-footer">Price : $ {lunchdata.price}</h5>

            </div>
        </div>
    );
};

export default Card;

