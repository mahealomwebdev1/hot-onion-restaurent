import React, { useState } from 'react';
import dinnerDataLoad from '../Fooddata/DinnerDataLoad';
import Dinner from '../Dinner/Dinner';

const ItemDinner = () => {
    const dinnerData= dinnerDataLoad;
    const [dinners, setdinners]=useState(dinnerData)
    return (
        <div>
              <div>
           
           {
               dinners.map(dinner => <Dinner dinner={dinner}></Dinner>)
           }
       </div>
        </div>
    );
};

export default ItemDinner;