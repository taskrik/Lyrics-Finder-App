import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findTrack } from '../../actions/findTrack';

class Search extends Component {

    state = {
        trackTitle: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Search = (e) => {
        e.preventDefault();
        const search = this.state.trackTitle
        
        this.props.findTrack(search)
    }
    

    render() {
        return (
            <div>
                <div className="card card-body mb-4 p-4">
                    <h1 className="display-4 text-center">
                        <i className="fas fa-music"></i>Search For A Song
                    </h1>
                    <p className="lead text-center">Get the lyrics for any song</p>
                    <form onSubmit={this.Search}>
                        <div className="from-group">

                            <input  type="text"
                                    placeholder="song title..." 
                                    name="trackTitle" 
                                    value={this.state.trackTitle}
                                    onChange={this.onChange} 
                                    className="form-control form-control-lg" />

                            <button className="btn btn-primary btn-lg btn-block mb-5" type="submit" >
                                Get Track Lyrics
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    trackTitle: state.trackTitle
})


export default connect(mapStateToProps, {findTrack})(Search);