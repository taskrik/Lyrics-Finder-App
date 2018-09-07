export const GET_LYRICS = "GET_LYRICS";

export const getLyrics = (id) => (dispatch) => {
    
    return(
    
    
    fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}?page=1&page_size=10&country=nl&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(response => response.json())
    //.then(data => console.log(data.message.body.lyrics))
    .then(result => dispatch({
        type: GET_LYRICS,
        payload:result.message.body.lyrics
    }))
    .catch(err => console.error(err)))
}
