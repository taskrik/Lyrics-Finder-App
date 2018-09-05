export const GET_DATA = "GET_DATA";

export const getTracks = () => (dispatch) => {
  
    return(
    
    fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=nl&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(response => response.json())
    //.then(data => console.log(data.message.body))
    .then(result => dispatch({
        type: GET_DATA,
        payload:result.message.body
    }))
    .catch(err => console.error(err)))
}


