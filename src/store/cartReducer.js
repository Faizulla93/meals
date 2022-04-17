import * as actions from './actionTypes';
const cartReducer = (state = [], action)=> {
    switch(action.type){
        case actions.ADD_CART : {
        const index = state.findIndex((elem)=> action.meal.id === elem.id);
        if(index > - 1 && action.meal.id === state[index].id) return [...state];
        
        else {
           return [...state, action.meal];
        }
        } 
        case actions.DECREMENT_CART : {
            const index = state.findIndex((elem)=> action.meal.id === elem.id);
            if(state[index].quantity === 1) return state
            const item = {...state[index], quantity: state[index].quantity - 1};
            const newArr = [...state.slice(0, index), item, ...state.slice(index + 1)];
            return newArr;
        }
        case actions.INCREMENT_CART : {
            const index = state.findIndex((elem)=> action.meal.id === elem.id);
            const item = {...state[index], quantity: state[index].quantity + 1};
            const newArr = [...state.slice(0, index), item, ...state.slice(index + 1)];
            return newArr;
        }
        case actions.REMOVE_CART : {
            const newArr = state.filter((elem)=> elem.id !== action.meal.id);
            return newArr;
        }
        default: return state;
    }
}

export default cartReducer;