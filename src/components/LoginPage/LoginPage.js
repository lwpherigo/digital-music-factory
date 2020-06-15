import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LoginPage.css';
import Swal from 'sweetalert2';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();



    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {  
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        {this.props.store.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.store.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <p>Log in and start exploring our world of music!</p>
          <div className="inputs">
            <label htmlFor="username">
              {/* <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              /> */}
              <TextField 
                style={{ margin: '13px', flex: '1' }}
                variant='outlined'
                size='small'
                type='text'
                className='inputs'
                label='Username'
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                required
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="password">
              {/* <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /> */}
              <TextField 
                style={{ margin: '13px', flex: '1' }}
                variant='outlined'
                size='small'
                type='text'
                className='inputs'
                label='Password'
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                required
              />
            </label>
          </div>
          <div className="login-button">
            <Button
              style={{ margin: '20px' }}
              variant='contained'
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            >
              Login
            </Button>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
