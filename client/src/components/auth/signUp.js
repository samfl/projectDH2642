import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import "./auth.css";

class SignUp extends Component {
  state = {
    loading: false,
    username: '',
    password: '',
    message: null
  };

  static propTypes = {
    isAuthorized: PropTypes.bool,
    error: PropTypes.object.isRequired,
    saveUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthorized } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'SIGNUP_FAILURE') {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }

    // If authenticated, set loading
    if (this.state.loading) {
      if (isAuthorized) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      loading: !this.state.loading
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    // Create user object
    const newUser = {
      username,
      password
    };

    // Attempt to saveUser
    this.props.saveUser(newUser);
  };

  render() {    
    let status = 
    <li className="submit">
      <button type="submit">Register</button>
    </li>

  if(this.state.loading) {
    status = 
      <div className={"loader-wrapper"}>
        <div className={"loader-auth"}></div>
      </div>
  }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <ul className="flex-outer">
            <div className="form-title">
              <label>Member Sign up</label>
            </div>
            <li>
              <label>username</label>
              <input name="username" id="username" type="text" placeholder="Enter username" onChange={this.onChange} required></input>
            </li>
            <li>
              <label>Password</label>
              <input name="password" id="password" type="password" placeholder="Enter Password" onChange={this.onChange} required></input>
            </li>
            {status}
          </ul>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  error: state.error
});

export default connect(
  mapStateToProps,
  { saveUser, clearErrors }
)(SignUp);