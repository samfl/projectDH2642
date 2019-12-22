import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { }
    componentWillUnmount() { }

    handleSignUp = (event) => {
        event.preventDefault(); 
        alert("New Username: " + event.target.usern.value + " New Password: " + event.target.passw.value);

        const newUser = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.addUser(newUser);
    }

    usernameInput = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    passwordInput = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Sign up</h3> 
                    <form onSubmit={this.handleSignUp}>  
                        <label>User name</label>
                        <input onChange={this.passwordInput} type="text" placeholder="Enter Username" name="usern" required></input>
                        <label>Password</label>
                        <input onChange={this.usernameInput} type="password" placeholder="Enter Password" name="passw" required></input>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { addUser }) (Registration);