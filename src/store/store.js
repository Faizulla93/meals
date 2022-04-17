import { createStore, combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import cartReducer from './cartReducer';
import descReducer from './descReducer';
const rootReducer = combineReducers({
    meals: mealsReducer,
    cart: cartReducer,
    desc: descReducer
})
const store = createStore(rootReducer);

export default store;