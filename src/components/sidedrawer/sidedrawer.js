import React from 'react';
import './sidedrawer.css';
import Image from '../../assets/Capture1.PNG';
import Navigation from '../navigation/navigation';
import Backdrop from '../backdrop/backdrop';

const SideDrawer = (props) =>{
    return(
        <div>
            <Backdrop show={props.defaultHome} hide={props.showHome}/>
            <div className='sidedrawer' style={{transform:props.defaultHome?'translateX(0)':'translateX(-100vh)'}}>
            <img src={Image} alt='logo'/>
            <nav>
               <Navigation/>
            </nav>
        </div>
        </div>
    );
}

export default SideDrawer;