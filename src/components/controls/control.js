import React from 'react';
import './control.css';

const Control =(props)=>{
    return(
        <div className='control'>
            <strong>{props.label}</strong>
            <button className='btn btn-primary' onClick={()=>props.add(props.label)}>More</button>
            <button className='btn btn-secondary' onClick={()=>props.remove(props.label)}>Less</button>
        </div>
    );
}

export default Control;