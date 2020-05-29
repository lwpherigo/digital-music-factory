import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ResultsListItem from '../ResultsListItem/ResultsListItem';
import SearchBar from '../SearchBar/SearchBar';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './ResultsPage.css';

class ResultsPage extends Component {
    state = {
        heading: '',
        searchTerm: '',
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_RESULTS',
        });
    }

    changeHeading = () => {
        this.setState({
            heading: 'Search Results for ' + this.state.searchTerm,
        });
    }

    handleInputChange = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    inputSearchTerm = (event) => {
        this.props.dispatch({ type: 'GET_RESULTS', payload: this.state.searchTerm });

        this.setState({
            heading: 'Search Results for ' + this.state.searchTerm,
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
                {/* <SearchBar onClick={this.changeHeading} /> */}
                <div className='search-bar'>
                    <TextField  
                        className='textField'
                        size='small'
                        variant='outlined'
                        type='text'
                        name='search'
                        placeholder='Track, Artist, Etc.'
                        onChange={this.handleInputChange('searchTerm')}
                    />
                    <Link to='/results'>
                    <Button 
                        className='search-btn'
                        variant='contained'
                        onClick={this.inputSearchTerm}>
                            Search
                        </Button>
                    </Link>
                </div>
                <h2>{this.state.heading}</h2>
                <div>
                    {resultsArray}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ResultsPage);