import * as actions from './actionTypes';
import getData from './data';

function mealsReducer (state = getData(), action){
    switch(action.type){
        case actions.INCREMENT : {
            const index = state.findIndex(item => item.id === action.payload.id);
            const item = {...state[index], quantity: state[index].quantity + 1};
            const newArr = [...state.slice(0, index), item, ...state.slice(index + 1)];
            return newArr;
        }
        case actions.DECREMENT : {
            const index = state.findIndex(item => item.id === action.payload.id);
            if(state[index].quantity === 0) return state;
            const item = {...state[index], quantity: state[index].quantity - 1};
            const newArr = [...state.slice(0, index), item, ...state.slice(index + 1)];
            return newArr;
        }
        case actions.SEARCH : {
            return action.payload.result;
        }
        
            default: return state;
    }
}

export default mealsReducer;
