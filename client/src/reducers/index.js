import { combineReducers } from 'redux'
import tracks from './tracks'
import lyrics from './lyrics'
import track from './track'



export default combineReducers({
    tracks,
    lyrics,
    track
  })