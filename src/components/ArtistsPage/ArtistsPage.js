import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ArtistList from '../ArtistList/ArtistList';

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
      <div>
        {artistArray}
      </div>
    )
  }
}

export default connect(mapStoreToProps)(ArtistsPage);
