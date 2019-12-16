import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./registration.css";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { }
    componentWillUnmount() { }

    handleReg = (event) => {
        event.preventDefault(); 
        alert("New Username: " + event.target.usern.value + " New Password: " + event.target.passw.value);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Create New User</h3> 
                    <form onSubmit={this.handleReg}>  
                        <label>User name</label>
                        <input type="text" placeholder="Enter Username" name="usern" required></input>
                        <label>Password</label>
                        <input type="text" placeholder="Enter Password" name="passw" required></input>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;
