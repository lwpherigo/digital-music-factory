import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ArtistsProfileItem extends Component {

  render() {
    return(
        <div>
            <h2>{this.props.item.stage_name}</h2>
        </div>
    )
  }
}

export default connect(mapStoreToProps)(ArtistsProfileItem);