import React from 'react';
import './toolbar.css';
import Navigation from '../navigation/navigation';

const Toolbar=(props)=>{
    return(
        <div className='toolbar'>
            <button onClick={props.show}><i class="fas fa-bars"></i></button>
            <i className='fas fa-hamburger'/>
            <nav>
                <Navigation/>
            </nav>
        </div>
    )
}

export default Toolbar;