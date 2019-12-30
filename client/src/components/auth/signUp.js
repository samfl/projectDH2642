import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class SignUp extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
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

    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password
    };

    // Attempt to saveUser
    this.props.saveUser(newUser);
  };

  render() {    
    return (
      <div>
        <h2>Sign up</h2>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input name="name" id="name" type="text" placeholder="Enter name" onChange={this.onChange} required></input>
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
  { saveUser, clearErrors }
)(SignUp);