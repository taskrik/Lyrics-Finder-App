import { GET_LYRICS } from "../actions/lyrics";



export default (state = {}, action) => {
    
    switch (action.type) {
        case GET_LYRICS:
            return action.payload
            
    
        default:
            return state;
    }
    
  }