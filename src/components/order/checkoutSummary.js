import React, {Component} from 'react';
import Burger from '../burger';
import './checkoutSummary.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from '../../axios/axios'

class Checkout extends Component{
    state={
        ingredients:{
            cheese :0,
            bacon:0,
            meat:0,
            salad:0
        }
    }
    componentWillMount=()=>{
        console.log('checkoutSummary = '+this.props.location.search);
        var query = new URLSearchParams(this.props.location.search);
        var ingredients = {};
        for (let params of query.entries()){
            console.log(params);
            ingredients[params[0]]=+params[1];
        }
        console.log(ingredients);
        this.setState({ingredients:ingredients});
        console.log(this.state.ingredients);
    }
    checkOutContinueHandler=()=>{
        this.props.history.replace('/orders');
        axios.post('/orders.json',this.state.ingredients).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        alert('Order Placed')        
    }
    checkOutCancelHandler=()=>{
        this.props.history.goBack();
    }
    render(){
        return(
            <div className='orderSummary'>
                <h1>We hope it taste well</h1>
                <div style={{position:'relative',top:'50px'}}>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <button onClick={this.checkOutContinueHandler} className='btn btn-success btnn' style={{position:'absolute',top:'630px',textAlign:'center'}}>Continue</button>
                    <button onClick={this.checkOutCancelHandler} className='btn btn-danger btnnn' style={{position:'absolute',top:'630px',textAlign:'center',left:'40%'}}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default Checkout;