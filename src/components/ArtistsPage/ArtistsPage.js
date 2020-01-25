import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ArtistList from '../ArtistList/ArtistList';
import './ArtistsPage.css';

class ArtistsPage extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ARTISTS'
    });
  }

  render() {
    const artistArray = this.props.store.artists.map((item, index) => {
        return (
          <ArtistList key={index} item={item} />
        )
    })

    return(
      <div className="container">
        <h1>Artists</h1>
        <h3>{artistArray}</h3>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(ArtistsPage);
