import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLyrics} from '../../actions/lyrics'
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom'


class Lyrics extends Component {


componentDidMount(){
  let id = this.props.match.params.id
    this.props.getLyrics(id)
}

 handleClick(){
     this.lyrics = {}
 }


  render() {
    const {lyrics} = this.props
    
    if(lyrics === undefined || lyrics === null || Object.keys(lyrics).length === 0){
        return (
            <div>
            <h2>Searching for Lyrics...</h2>
            <Loading />
          </div>
        )
    }else{
        return(
          <div>
              <Link to={`/`} className="btn btn-dark btn-sm mb-4" onClick={this.handleClick}>Go Back</Link>
              <h2>Lyrics:</h2>
              {lyrics.lyrics_body}
          </div>  
        )
    }
  }
}

const mapStateToProps = (state) => ({
    lyrics: state.lyrics
})

export default connect (mapStateToProps,{getLyrics})(Lyrics);

