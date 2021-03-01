import React from 'react';
import './modal.css';
import Backdrop from '../backdrop/backdrop';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Modal =(props)=>{
    console.log('props',props);
    return(
        <div>
            <Backdrop show={props.checkout} hide={props.hide}></Backdrop>
            <div className='modal' style={{transform: props.checkout?'translateY(0)':'translateY(-100vh)'}}>
                <p><h1>ORDER SUMMARY</h1></p>
                <p>Burger Ingredients are:</p>
                <ul>
                    <li>Cheese : {props.ingredient.cheese}</li>
                    <li>Bacon : {props.ingredient.bacon}</li>
                    <li>Meat : {props.ingredient.meat}</li>
                    <li>Salad : {props.ingredient.salad}</li>
                </ul>
                <p>Continue to Checkout...</p>
                <p><strong>Net Price: {props.price}</strong></p>
                <button onClick={props.hide} className='btn btn-danger'>Cancel</button>
                <button onClick={props.sendData} className='btn btn-success'>Checkout</button>
            </div>
        </div>
    );
}

export default Modal;