import { GET_TRACK } from "../actions/tracks";
import { FIND_TRACK } from "../actions/findTrack";



export default (state = {}, action) => {

    switch (action.type) {
        case GET_TRACK:
            return action.payload

        case FIND_TRACK:
            return action.payload

        default:
            return state;
    }

}