import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLyrics } from '../../actions/lyrics'
import { getTrack } from '../../actions/tracks'
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class Lyrics extends Component {


    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getLyrics(id)
        this.props.getTrack(id)
    }

    handleClick() {
        this.lyrics = {}
    }


    render() {
        const { lyrics, track } = this.props

        if (lyrics === undefined || lyrics === null || Object.keys(lyrics).length === 0 ||
        track === undefined || track === null || Object.keys(track).length === 0) {
            return (
                <div>
                    <h2>Searching for Lyrics...</h2>
                    <Loading />
                </div>
            )
        } else {
            return (
                <div>
                    <Link to={`/`} className="btn btn-dark btn-sm mb-4" onClick={this.handleClick}>Go Back</Link>
                    <h2>Lyrics:</h2>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by {''}
                            <span className="text-secondary">
                                {track.artist_name}
                            </span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">
                                {lyrics.lyrics_body}
                            </p>
                        </div>
                    </div>
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Genre</strong>:{ track.primary_genres.music_genre_list.length === 0? " n/a" : 
                                track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                            }
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words</strong>: {track.explicit === 0 ? 'Νο' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    lyrics: state.lyrics,
    track: state.track
})

export default connect(mapStateToProps, { getLyrics, getTrack })(Lyrics);

