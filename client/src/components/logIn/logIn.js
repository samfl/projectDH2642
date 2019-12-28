import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./logIn.css";
import { connect } from 'react-redux'; 

class LogIn extends Component {

    componentDidMount() { 
    }

    componentWillUnmount() { }
    
    handleLogIn = (event) => {
        event.preventDefault(); 
        alert("Username: " + event.target.uname.value + " Password: " + event.target.passw.value);
    }

    render() {
        
        return (
            <div>
                <h3>Login</h3>
                <div>
                    <form onSubmit={this.handleLogIn}>
                        <label>User name</label>
                        <input name="uname" type="text" placeholder="Enter Username" required></input>
                        <label>Password</label>
                        <input name="passw" type="password" placeholder="Enter Password" required></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;