import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ArtistProfileItem from '../ArtistProfileItem/ArtistProfileItem';
// import './ArtistProfile.css';

class ArtistProfile extends Component {

    render() {
        // const profileArray = this.props.store.selected.map((item, index) => {
        //     return (
        //       <ArtistProfileItem key={index} item={item} />
        //     )
        // })

        return(
            <div className="container">
                <h2>{this.props.store.selected.stage_name}</h2>
                <p>{this.props.store.selected.bio}</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ArtistProfile);