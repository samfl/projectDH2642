import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import "./auth.css";


class LogIn extends Component {
  state = {
    modal: false,
    username: '',
    password: '',
    message: null
  };

  static propTypes = {
    isAuthorized: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthorized } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAILURE') {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthorized) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    // Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
        <ul className="flex-outer">
          <li>
            <label>Username</label>
            <input name="username" id="username" type="text" placeholder="Enter username" onChange={this.onChange} required></input>
          </li>
          <li>
            <label>Password</label>
            <input name="password" id="password" type="password" placeholder="Enter Password" onChange={this.onChange} required></input>
          </li>
          <li>
            <button type="submit">Login</button>
          </li>
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
  { login, clearErrors }
)(LogIn);