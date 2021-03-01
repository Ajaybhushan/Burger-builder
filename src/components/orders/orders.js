import React from 'react';
import Toolbar from '../toolbar/toolbar';
import axios from 'axios';

var Orders =()=>{
    var promise = axios.get('http://burger-app-8fcbd.firebaseio.com.json')
    promise.then(res=>console.log(res)).catch(err=>console.log(err));
    return(
        <div className='orders'>
            <Toolbar/>
            <h1 style={{marginTop:'100px'}}>Your orders</h1>
        </div>
    );
}

export default Orders;