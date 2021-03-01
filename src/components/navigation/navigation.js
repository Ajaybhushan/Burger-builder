import React,{Component} from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component{
    state={
        Active:true
    }
    toggle=()=>{
        this.setState({Active:false})
        console.log(this.state.Active)
    }
    render(){
        return(
            <div className='navigation'>
               <ul>
                   <li><NavLink to='/' onClick={this.toggle} activeClassName={this.state.Active?'Active':null}>Burger Builder</NavLink></li>
                   <li><NavLink to='/orders' onClick={this.toggle} activeClassName={this.state.Active?null:'Active'}>Orders</NavLink></li>
               </ul>
            </div>
        );
    }
}

export default Navigation;