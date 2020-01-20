import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser, updateUserInput} from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import "./auth.css";

class SignUp extends Component {
  state = {
    loading: false,
    password: '',
    confirmPassword: '',
    message: null
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

    if (this.state.loading) {
      if (isAuthorized) {
        this.toggleErrAndLoad();
      }
    }
  }

  toggleErrAndLoad = () => {
    this.props.clearErrors();
    this.setState({
      loading: !this.state.loading
    });
  };

  usernameChanged = e => {
    this.props.updateUserInput(e.target.value);
  };

  passwordChanged = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { password, confirmPassword } = this.state;
    if(password===confirmPassword) {
      this.setState({
        loading: true,
        message: null
      });

      const newUser = {
        username: this.props.usernameInput,
        password
      };

      this.props.saveUser(newUser);
    }
    else {alert('The password and confirmation password do not match. Please try again')}
  };

  render() {    
    let status = null; 
    let errorMessage = null; 

    if (this.state.loading) {
      status = <div className={"loader-wrapper"}> <div className={"loader-auth"}></div></div>
    } else {
      status = <li className="submit"> <button className={"submit-button"} type="submit">Signup</button></li> ;
    }

    if (this.state.message && this.state.loading) {
      errorMessage = <p className="authErrorAlert">{this.state.message}</p>
      status = <li className="submit"> <button className={"submit-button"} type="submit">Signup</button></li> ;
    } else {
      errorMessage = null; 
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
              <input name="username" id="username" type="text" placeholder="Enter username" value={this.props.usernameInput} onChange={this.usernameChanged} required></input>
            </li>
            <li>
              <label>Password</label>
              <input name="password" id="password" type="password" placeholder="Enter Password" onChange={this.passwordChanged} required></input>
              <label>Re-enter Password</label>
              <input name="confirmPassword" id="confirmPassword" type="password" placeholder="Enter Password" onChange={this.passwordChanged} required></input>
            </li>
            {status}
            {errorMessage}
          </ul>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  error: state.error,
  usernameInput: state.auth.usernameInput
});

export default connect(
  mapStateToProps,
  { saveUser, clearErrors, updateUserInput }
)(SignUp);