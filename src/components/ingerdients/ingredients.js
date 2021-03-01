import React from 'react';
import './ingredients.css';
//import PropType from 'prop-type';

const Ingredient = (props) => {
    var Ingredient = null;
    switch(props.type){
       case('bread-bottom'): Ingredient = <div className='BreadBottom'></div>;
         break;
       case('bread-top'): Ingredient = (
        <div className='BreadTop'>
           <div className='Seeds1'></div>
           <div className='Seeds2'></div>
        </div>    
       );
         break;
       case('meat'): Ingredient = <div className='Meat'></div>;
         break;
       case('cheese'): Ingredient = <div className='Cheese'></div>;
         break;
       case('salad'): Ingredient = <div className='Salad'></div>;
         break;
       case('bacon'): Ingredient = <div className='Bacon'></div>;
        break;
       default: Ingredient=null;
    }
    return Ingredient;
}

// Ingredient.propType = {
//     type:PropType.toString.isRequired
// }

export default Ingredient;