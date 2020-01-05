import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SignUp from '../auth/signUp';
import LogIn from '../auth/logIn';
import LogOut from '../auth/logOut';

class NavBar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthorized, user } = this.props.auth;

    const userMenu = (
        <div>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
            <Link to="/profile">Profile</Link>
            <Link to="/table">Table</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/search">Search</Link>
            <LogOut />
        </div>
    );

    const guestMenu = (
      <div>
            <strong>Please login to access the tools</strong>
      </div>
    );

    return (
      <div>
            {isAuthorized? userMenu: guestMenu}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(NavBar);