import React , {Component} from 'react';
import Burger from '../components/burger';
import Controls from '../components/controls';
import Modal from '../components/modal/modal';
import Toolbar from '../components/toolbar/toolbar';
import SideDrawer from '../components/sidedrawer/sidedrawer';

var price = {
    cheese:20,
    bacon:5,
    meat:15,
    salad:5
}

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            cheese :0,
            bacon:0,
            meat:0,
            salad:0
        },
        basePrice:20,
        puschasable:false,
        checkout:false,
        home:false
    }
    // buttonHandler = (type)=>{
    //     var sum = 0,puschase = false;
        
    //     this.setState({puschasable:sum>0?!puschase:puschase});
    // }
    addIngredientHandler=(type)=>{
       var purchase = false; 
       var oldCount = this.state.ingredients[type];
       var newCount = oldCount + 1;
       var oldPrice = this.state.basePrice;
       var newPrice = oldPrice + price[type];
       var ingredient = {
           ...this.state.ingredients
       };
       ingredient[type]=newCount;
       this.setState({ingredients:ingredient,basePrice:newPrice,puschasable:ingredient[type]>0?!purchase:purchase});
    }

    removeIngredientHandler = (type)=>{
        var purchase = true;
        var oldCount = this.state.ingredients[type];
        var newCount = oldCount - 1;
        var oldPrice = this.state.basePrice;
        var newPrice = oldPrice - price[type];
        var ingredient = {
            ...this.state.ingredients
        };
        console.log(ingredient);
        ingredient[type]=newCount;
        console.log(ingredient);
        this.setState({ingredients:ingredient,basePrice:newPrice,puschasable:ingredient[type]>0?purchase:!purchase});
    }

    checkoutHandler =()=>{
        this.setState({checkout:true});   
    }
    hidden =()=>{
        this.setState({checkout:false});   
    }
    show=()=>{
        this.setState({home:true});
    }
    hideBar=()=>{
        this.setState({home:false});
    }

    sendData = () =>{
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
            console.log(queryParams);
        }
        const queryString = queryParams.join('&');
        console.log(queryString);
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        });
    } 
  
    render(){
        console.log(Modal);
        return (
            <div>
               <SideDrawer defaultHome={this.state.home} showHome={this.hideBar}/>
               <Toolbar show={this.show}/> 
               <Modal checkout={this.state.checkout} sendData={this.sendData} ingredient={this.state.ingredients} hide={this.hidden} price={this.state.basePrice}/>
               <Burger ingredients={this.state.ingredients}/>
               <Controls disable={this.state.puschasable} click={this.checkoutHandler} labels={this.state.ingredients} price={this.state.basePrice} remove={this.removeIngredientHandler} add={this.addIngredientHandler}/>
            </div>
        );    
    }
    componentDidMount(){
        console.log(this.props);
    }
}

export default BurgerBuilder;