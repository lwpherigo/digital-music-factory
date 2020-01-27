import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="userContain">
    <h1 id="welcome">
      Welcome, { props.store.user.username }!
    </h1>
    <p>Your ID is: {props.store.user.id}</p>
    <p>Have fun downloading music!</p>
    <div className="logout-button">
    <LogOutButton className="log-in" />
    </div>
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
