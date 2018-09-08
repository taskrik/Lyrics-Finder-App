import { GET_TRACK } from "../actions/tracks";



export default (state = {}, action) => {
    
    switch (action.type) {
        case GET_TRACK:
            return action.payload
            
    
        default:
            return state;
    }
    
  }