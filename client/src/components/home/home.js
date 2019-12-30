import React, { Component } from "react";
import LogIn from '../auth/logIn';
import SignUp from '../auth/signUp';
import NavBar from '../navBar/navBar';
import "./home.css";

class Home extends Component {
    constructor() {
        super(); 
        this.state = {
            form: 'logIn'
        };
    }

    render() {
        let form = this.state.form; 
        if(this.state.form == 'signUp') 
            form = <SignUp />
        else
            form = <LogIn />

        return (
            <div className="wrapper">
                <h1 id={"title"}>BỌỌLU</h1>
                <p>Your personal football info</p>
                <NavBar />
                <button onClick={this.onClick}>Switch</button>
                {form}
            </div>
        );
    }

    onClick = e => {
        if (this.state.form == 'signUp')
            this.setState({ form: 'logIn' });
        else
            this.setState({ form: 'signUp' });
    }
}

export default Home; 