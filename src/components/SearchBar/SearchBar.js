import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import './SearchBar.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <div className='search-bar'>
                <TextField
                    className="textField"
                    size="small"
                    variant="outlined"
                    type="text"
                    name="search"
                    placeholder="Track, Artist, Etc."
                    onChange={this.handleInputChange('searchTerm')}
                />
                <Link to="/results">  
                <Button 
                    className="search-btn" 
                    variant="contained"
                    onClick={this.inputSearchTerm}>
                Search
                </Button>
                </Link>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SearchBar);