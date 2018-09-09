export const FIND_TRACK = "FIND_TRACK";

export const findTrack = (e) => (dispatch) => {
    
    return(
    
    
    fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${e}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(response => response.json())
    //.then(data => console.log(data.message.body.track_list))
    .then(result => dispatch({
        type: FIND_TRACK,
        payload:result.message.body.track_list
    }))
    .catch(err => console.error(err)))
}
