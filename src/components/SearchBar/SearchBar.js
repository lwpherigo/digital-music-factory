import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    render() {
        return(
            <div>
                <input
                    type="text"
                    name="search"
                    placeholder="Track, Arist, Etc."
                    onChange={this.handleInputChange('searchTerm')}
                />
                <button>Search</button>
            </div>
        )
    }

}

export default connect(mapStoreToProps)(SearchBar);