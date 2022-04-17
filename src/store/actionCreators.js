import { INCREMENT, DECREMENT, SEARCH, ADD_CART, REMOVE_CART, DECREMENT_CART, INCREMENT_CART } from "./actionTypes"

 export const incr = (id)=> {
   return {
        type: INCREMENT,
        payload: {
            id,
        }
    }
}

export const decr = (id)=> {
    return {
         type: DECREMENT,
         payload: {
             id
         }
     }
 }

 export const search = (result)=> {
     return {
         type: SEARCH,
         payload: {
             result,
         }
     }
 }

 export const addCart = (meal)=> {
     return {
         type: ADD_CART,
         meal,
     }
 }

 export const removeCart = (meal)=> {
    return {
        type: REMOVE_CART,
        meal,
    }
}

export const decrCart = (meal)=> {
    return {
        type: DECREMENT_CART,
        meal,
    }
}

export const incrCart = (meal)=> {
    return {
        type: INCREMENT_CART,
        meal,
    }
}