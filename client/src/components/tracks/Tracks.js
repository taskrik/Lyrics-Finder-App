import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTracks } from '../../actions/tracks';
import Track from './Track';
import SearchResult from './SearchResult';
import Loading from '../layout/Loading';


class Tracks extends Component {
    state = {
        tracks: {},
        track: []
    }
    componentWillMount() {
        this.props.getTracks()
    }


    render() {
        
        if (Object.keys(this.props.track).length !== 0) {
            const track = this.props.track

            return (
                <div>
                    <h1>Search Results:</h1>
                    <div className="row"> {track.map(trackItem => (
                        <SearchResult key={trackItem.track.track_id} tracks={trackItem.track} />
                    ))}

                    </div>

                </div>
            )
        } else {

            if (this.props.tracks !== undefined) {
                const tracks = this.props.tracks.track_list
                //console.log(this.props.tracks.track_list)

                return (
                    <div>
                        <h1>Top 10 Tracks</h1>
                        <div className="row">
                            {tracks.map(trackItem => (
                                <Track key={trackItem.track.track_id} track={trackItem.track} />
                            ))}


                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>Fetching Tracks...</h2>
                        <Loading />
                    </div>
                )
            }
        }
    }

}

const mapStateToProps = (state) => ({
    tracks: state.tracks.list,
    track: state.track
})

export default connect(mapStateToProps, { getTracks })(Tracks);