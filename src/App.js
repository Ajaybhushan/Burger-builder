import React, {Component} from 'react';
import './App.css';
import BurgerBuilder from './containers/burgerBuilder';
import {Route, Switch} from 'react-router-dom';
import Checkout from './components/order/checkoutSummary';
import Orders from './components/orders/orders';

class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render(){
     return(
       <div>
          <Switch>
            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path='/orders'component={Orders}/>
          </Switch> 
       </div>
     );
   }
}

export default App;