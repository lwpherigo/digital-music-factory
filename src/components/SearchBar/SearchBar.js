import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';


class SearchBar extends Component {
    state = {
        searchTerm: '',
    };

    handleInputChange = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
    }

    inputSearchTerm = (event) => {
        this.props.dispatch({ type: 'GET_RESULTS', payload: this.state.searchTerm });
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    name="search"
                    placeholder="Track, Arist, Etc."
                    onChange={this.handleInputChange('searchTerm')}
                />
                <Link to="/results">
                <button onClick={this.inputSearchTerm}>Search</button>
                </Link>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SearchBar);