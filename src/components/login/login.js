import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { }
    componentWillUnmount() { }
    
    handleLogin = (event) => {
        event.preventDefault(); 
        alert("Username: " + event.target.uname.value + " Password: " + event.target.passw.value);
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <div>
                    <form onSubmit={this.handleLogin}>
                        <label>User name</label>
                        <input name="uname" type="text" placeholder="Enter Username" required></input>
                        <label>Password</label>
                        <input name="passw" type="password" placeholder="Enter Password" required></input>
                        <button type="submit">Login</button>
                    </form>
                    <Link to="/registration">No account? Register Here!</Link>
                </div>
            </div>
        );
    }
}

export default Login;
