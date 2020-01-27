import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RegisterPage.css';

class RegisterPage extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.firstname && this.state.lastname && this.state.email && this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="register-container">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div className="inputs">
            <label htmlFor="firstname">
              First Name:
              <br />
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChangeFor('firstname')}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="lastname">
              Last Name:
              <br />
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChangeFor('lastname')}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="email">
              Email:
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="username">
              Username:
              <br />
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div className="inputs">
            <label htmlFor="password">
              Password:
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div className="register-button">
            <button
              className="register"
              type="submit"
              name="submit"
              value="Register"
              onClick={this.registerUser}
            >Register</button>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="">
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

