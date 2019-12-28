import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogIn from '../logIn/logIn';
import SignUp from '../signUp/signUp';
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
                <div id={"home-buttons"}>
                    <a onClick={this.logIn}>Log in</a>
                    <a onClick={this.signUp}>Sign up</a>
                </div>
                {form}
            </div>
        );
    }

    signUp = e => {
        this.setState({
            form: 'signUp'
        });
    }

    logIn = e => {
        this.setState({
            form: 'logIn'
        });
    }
    
    /*
    signUp = e => {
        let home = e.target.parentElement.parentElement;
        let title = e.target.parentElement.parentElement.firstElementChild;
        let signUp = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
        console.log(signUp);
        home.setAttribute('style', 'justify-content: normal');
        title.setAttribute('style', 'font-size: 10vw');
        signUp.setAttribute('style', 'display: inline; opacity: 1');
        this.setState({
            form: 'signUp'
        });
    }
    */

    /*
    logIn = e => {
        let home = e.target.parentElement.parentElement;
        let title = e.target.parentElement.parentElement.firstElementChild;
        let logIn = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
        console.log(logIn);
        home.setAttribute('style', 'justify-content: normal');
        title.setAttribute('style', 'font-size: 10vw');
        logIn.setAttribute('style', 'display: inline; opacity: 1');
        this.setState({
            form: 'logIn'
        });
    }
    */
}

export default Home;