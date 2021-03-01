var redux = require('redux');
var centralStore = redux.createStore();

// dummy state
var initialState = {
    Counter:0
}

// Reducers
var reducers = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            Counter:state.Counter+1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            Counter:state.Counter+action.value
        }
    }
    return state;
}

//Central Store
var Store = centralStore(reducers);
console.log(Store.getState());

//Action
Store.dispatch({type:'INC_COUNTER'});
Store.dispatch({type:'ADD_COUNTER', value:40})
//Subscription