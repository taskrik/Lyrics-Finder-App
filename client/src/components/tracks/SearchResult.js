import React from 'react'
import { Link } from 'react-router-dom'

const clearState = () => {
    this.setState({
        track: {}
    })

}

const SearchResult = (props) => {
    const { tracks } = props
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{tracks.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i>Track</strong>: {tracks.track_name}
                        <br />
                        <strong><i className="fas fa-play"></i>Album</strong>: {tracks.album_name}
                    </p>
                    <Link to={`/Lyrics-Finder-App/track/lyrics/${tracks.track_id}`} className="btn btn-dark btn-block" onClick={clearState}>
                        <i className="fas fa-chevron-right"></i>View Lyrics
            </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchResult