import { GET_DATA } from "../actions/tracks";



export default (state = {}, action) => {
    
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                 list: action.payload
            }
    
        default:
            return state;
    }
    
  }