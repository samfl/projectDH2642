import React, { Component } from "react";
import LogIn from '../auth/logIn';
import SignUp from '../auth/signUp';
import NavBar from '../navBar/navBar';
import { connect } from 'react-redux';
import "./home.css";
import footballPlayer from '../../images/footballplayer1.png'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            formValue: true
        };
    }

      toggleForm = () => {
        this.setState({
            formValue: !this.state.formValue
        })
    }

    render() {
        const { isAuthorized } = this.props.auth;
        let form = null; 
        let linkName = null;
        if(this.state.formValue) {
            form = <SignUp />
            linkName = 'Already have an account? Log in'
        } else {
            form = <LogIn />
            linkName = "Don't have an account? Sign up"
        }
        const userHome = ( <div> <NavBar /> <p>Explore the Boolu tools!</p></div>);
        const guestHome = ( <div> {form} <a className="formToggle" onClick={this.toggleForm}> {linkName} </a> </div> );
        const guestHeader =
            (<div className="headerWrapper">
                <div className="textInfo">
                    <ul>
                        <li>Your personal football stats</li>
                        <li>League tables for your favorite team</li>
                        <li>Match schedule for your favorite team</li>
                    </ul>
                </div>
                <img id="headerImage" src={footballPlayer} alt="football player" />
            </div>);

        return (
            <div className="wrapper">
                <div className="containerFlexCenter">
                    <h1 id={"title"}>BỌỌLU</h1>
                    {isAuthorized? null : guestHeader }


                <div className="containerFlexCenter">
                    {isAuthorized? userHome: guestHome}
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
    null
  )(Home);
