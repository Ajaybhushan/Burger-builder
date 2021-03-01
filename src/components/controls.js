import React from 'react';
import Control from './controls/control';
import './controls.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Controls =(props)=>{
    var controls = [
        {label: 'Bacon' ,type:'bacon'},
        {label: 'Salad' ,type:'salad'},
        {label: 'Cheese' ,type:'cheese'},
        {label: 'Meat' ,type:'meat'}
    ];
    return(
        <div className='controls'>
            <strong>Price : {props.price}</strong>
            <div>
                {controls.map(ele=>{
                return <Control label={ele.type} key={ele.type} add={props.add} remove={props.remove}/>
                })}
            </div>
            <button className='OrderButton' onClick={props.click} disabled={!props.disable}>ORDER NOW</button>
        </div>
    );
}

export default Controls;