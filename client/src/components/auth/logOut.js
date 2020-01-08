import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import "./auth.css";

export class LogOut extends Component {

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
