import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

    const authLinks = (
        <div>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
            <LogOut />
        </div>
    );

    const guestLinks = (
      <div>

      </div>
    );

    return (
      <div>
            {isAuthorized ? authLinks : guestLinks}
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