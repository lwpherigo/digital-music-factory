import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';


class ArtistList extends Component {

  goToProfile = (event) => {
    const artistId = this.props.item.id;
    console.log('Artist ID: ', artistId);
    this.props.dispatch({
      type: 'GET_ARTIST_BY_ID',
      payload: this.props.item
    })
    this.props.history.push('/artist-profile');
  }

  render() {
    return(
      <div onClick={this.goToProfile}>
        <h1 className="artist-btn">{this.props.item.stage_name}</h1>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(withRouter(ArtistList));