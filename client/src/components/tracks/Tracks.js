import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTracks } from '../../actions/tracks';
import Track from './Track';
import Loading from '../layout/Loading';


class Tracks extends Component {
    state = {
        tracks: {}
    }
    componentWillMount() {

        this.props.getTracks()
    }


    render() {
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

const mapStateToProps = (state) => ({
    tracks: state.tracks.list
})

export default connect(mapStateToProps, { getTracks })(Tracks);