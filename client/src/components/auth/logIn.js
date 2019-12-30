import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LogIn extends Component {
  state = {
    modal: false,
    email: '',
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
    const { email, password } = this.state;
    const user = { email, password };
    // Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <label>Email</label>
          <input name="email" id="email" type="text" placeholder="Enter email" onChange={this.onChange} required></input>
          <label>Password</label>
          <input name="password" id="password" type="password" placeholder="Enter Password" onChange={this.onChange} required></input>
          <button type="submit">Login</button>
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