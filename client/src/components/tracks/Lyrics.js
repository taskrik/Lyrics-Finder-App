import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLyrics } from '../../actions/lyrics'
import { getTrack } from '../../actions/tracks'
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom'
import Moment from 'react-moment'


const initialState = {
    lyrics: {},
    track: {}
}
class Lyrics extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getLyrics(id)
        this.props.getTrack(id)
    }

    handleClick() {
        this.setState(initialState)

    }


    render() {
        const { lyrics, track } = this.props

        if (
            track === undefined || track === null || Object.keys(track).length === 0) {
            return (
                <div>
                    <h2>Searching for Lyrics...</h2>
                    <Loading />
                </div>
            )
        } else if (lyrics === undefined || lyrics === null || Object.keys(lyrics).length === 0) {

            return (
                <div className="card">
                    <h2 className="card-header">Sorry No lyrics available for this song...</h2>
                    <button to={`/Lyrics-Finder-App`} className="btn btn-dark btn-sm mb-4" onClick={this.handleClick}>Go Back</button>
                </div>
            )

        } else {

            if (track.singleTrack.track_id != this.props.match.params.id) {
                return (
                    <div>
                        <h2>Searching for Lyrics...</h2>
                        <Loading />
                    </div>
                )
            } else
                return (
                    <div>
                        <Link to={`/Lyrics-Finder-App`}><button className="btn btn-dark btn-sm mb-4" onClick={this.handleClick}>Go Back</button></Link>
                        <h2>Lyrics:</h2>
                        <div className="card">
                            <h5 className="card-header">
                                {track.singleTrack.track_name} by {''}
                                <span className="text-secondary">
                                    {track.singleTrack.artist_name}
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
                                <strong>Album ID</strong>: {track.singleTrack.album_id}
                            </li>
                            <li className="list-group-item">
                                <strong>Genre</strong>:{track.singleTrack.primary_genres.music_genre_list.length === 0 ? " n/a" :
                                    track.singleTrack.primary_genres.music_genre_list[0].music_genre.music_genre_name
                                }
                            </li>
                            <li className="list-group-item">
                                <strong>Explicit Words</strong>: {track.singleTrack.explicit === 0 ? 'Νο' : 'Yes'}
                            </li>
                            <li className="list-group-item">
                                <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.singleTrack.first_release_date}</Moment>
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

