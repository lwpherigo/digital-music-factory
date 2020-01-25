import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';

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
        <Grid 
        container
        justify="center">
          <Grid 
          item xs={8}
          className="artist-btn"
          >
            {this.props.item.stage_name}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(withRouter(ArtistList));