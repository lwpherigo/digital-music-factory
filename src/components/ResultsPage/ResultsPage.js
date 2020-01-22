import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ResultsListItem from '../ResultsListItem/ResultsListItem';

class ResultsPage extends Component {
    state = {
        heading: 'Results',
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_RESULTS',
        });
    }

    render() {
        const resultsArray = this.props.store.results.map((item, index) => {
            return (
                <ResultsListItem key={index} track={item} />
            )
        })

        return (
            <div className="container">
                <h2>{this.state.heading}</h2>
                <div>
                    {resultsArray}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ResultsPage);