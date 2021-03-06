import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import './Nav2.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchBar from '../SearchBar/SearchBar';


const Nav = (props) => (

  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Digital Music Factory</h2>
    </Link>

    {/* <SearchBar /> */}

    <div className="nav-right">

    {/* <Link className="nav-link" to="/home">
      Home
    </Link>
    <Link className="nav-link" to="/artists">
      Artists
    </Link> */}
    {/* <Link className="nav-link" to="/about">
        About Us
    </Link> */}
    {/* <Link className="nav-link" to="/login"> */}
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {/* {props.store.user.id ? 'Home' : 'Login / Register'}
      </Link> */}
      { !props.store.user.id && (
        <>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <Link className="nav-link" to="/login">
            Login / Register
          </Link>  
        </>
      )}
      {props.store.user.id && (
        <>
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/results">
            Search 
          </Link>
          <Link className="nav-link" to="/artists">
            Artists
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {/* Always show this link since the about page is not protected */}
    </div>
  </div>
);

export default connect(mapStoreToProps)(Nav);