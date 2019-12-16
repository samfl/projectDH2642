import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1 id={"home-title"}>BỌỌLU</h1>
                <div id={"home-buttons"}>
                    <a onClick={this.signIn} id={"home-signUp"}>Sign up</a>
                    <a id={"home-logIn"}>Log in</a>
                </div>
                <div id={"home-signUp-info"}>
                    Username<input className={"home-input"} type={"text"}/><br/>
                    Password<input className={"home-input"} type={"text"}/><br/>
                    Favorite team <input className={"home-input"} type={"text"}/> <button>search</button><br/>
                    <button>submit</button>
                </div>
            </div>
        );
    }
    signIn = e => {
        let home = e.target.parentElement.parentElement;
        let title = e.target.parentElement.parentElement.firstElementChild;
        let signUp = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
        console.log(signUp);
        home.setAttribute('style', 'justify-content: normal');
        title.setAttribute('style', 'font-size: 10vw');
        signUp.setAttribute('style', 'display: inline; opacity: 1');
    }
}

export default Home;