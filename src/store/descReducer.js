export default function descReducer (state = {}, action){
    switch(action.type){
        case "DESC" : {
            return action.element
        }
        default: return state;
    }
}