import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import "./auth.css";

export class LogOut extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
        <Link id="logOut" onClick={this.props.logout} to='/'>
          Logout
        </Link>
    );
  }
}

export default connect(
  null,
  { logout }
)(LogOut);
