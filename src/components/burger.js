import React from 'react';
import './burger.css';
import Ingredient from './ingerdients/ingredients';

const Burger =(props)=>{
   var ingredient = null,i=[];
   var {cheese,bacon,meat,salad} = props.ingredients;
   i.push(cheese,bacon,meat,salad);
   console.log(i);
   console.log(cheese,bacon,meat,salad);
   if (cheese === 0 && bacon === 0 && meat === 0 && salad ===0){
       ingredient = <p>Add ingredients</p>
   }else{
      ingredient = Object.keys(props.ingredients).map((val,i)=>{
         return [...Array(props.ingredients[val])].map((_,i)=>{
            return <Ingredient type={val} key={val+i}/>
         })
      });
      
   }
    //else{
   //    i.map(value=>{
   //       return ingredient=<Ingredient type={}/>
   //    })
   // }
   // var ingredient=[],ing;
   // for(let prop in props.ingredients){
   //    ingredient.push(prop);
   // }
   // var [a,b,c,d] = ingredient[0];
   // console.log(a,b,c,d);
   // // ingredient.map(( ivalue, index)=>{
   // //    console.log(ivalue,index);
   // //    return (
   // //       <Ingredient type={ivalue}/>
   // //    );
   // // })
   return(
      <div className='bur'>
         <div className='burger'>
            <Ingredient type='bread-top'/>
            {ingredient}
            <Ingredient type='bread-bottom'/>
      </div>
      </div>
   );
}

export default Burger;