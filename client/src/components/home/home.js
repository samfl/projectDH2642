import React, { Component } from "react";
import LogIn from '../auth/logIn';
import SignUp from '../auth/signUp';
import NavBar from '../navBar/navBar';
import Profile from '../profile/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./home.css";

class Home extends Component {
    constructor() {
        super(); 
        this.state = {
            form: 'logIn'
        };
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
      };

    render() {
        const { isAuthorized } = this.props.auth;
        let form = this.state.form; 
        if(this.state.form == 'signUp') 
            form = <SignUp />
        else
            form = <LogIn />

        const userHome = (
            <div>
                <NavBar />
                <Profile />
            </div>
        )

        const guestHome = (
            <div>
                <button onClick={this.onClick}>Switch</button>
                {form}
            </div>
        )

        return (
            <div className="wrapper">
                <div className="containerFlexCenter">
                    <h1 id={"title"}>BỌỌLU</h1>
                    <p>YOUR PERSONAL FOOTBALL INFORMATION</p>
                </div>

                <div className="containerFlexCenter">
                    {isAuthorized? userHome: guestHome}
                </div>
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

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Home);