import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import TrackListItem from '../TrackListItem/TrackListItem';

import './LandingPage.css';

class LandingPage extends Component {
    state = {
        heading: 'Trending Music',
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TRACKS',
        });
    }

    render() {
        const trackArray = this.props.store.tracks.map((item, index) => {
            return (
                <TrackListItem key={index} track={item} />
            )
        })

        return (
            <div className="container">
                <h1>{this.state.heading}</h1>
                <div>
                    {trackArray}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
