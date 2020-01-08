import React, { Component } from "react";
import LogIn from '../auth/logIn';
import SignUp from '../auth/signUp';
import NavBar from '../navBar/navBar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./home.css";
import footballPlayer from '../../images/footballplayer1.png'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            formValue: true
        };
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
      };

      toggleForm = () => {
        this.setState({
            formValue: !this.state.formValue
        })
    }

    render() {
        const { isAuthorized } = this.props.auth;
        let form = null; 
        let buttonName = null; 
        if(this.state.formValue) {
            form = <SignUp />
            buttonName = 'Change To Login'
        } else {
            form = <LogIn />
            buttonName = 'Change To SignUp'
        }
        const userHome = ( <div> <NavBar /> </div>);
        const guestHome = ( <div> {form} <button className="formToggle" onClick={this.toggleForm}> {buttonName} </button> </div> );

        return (
            <div className="wrapper">
                <div className="containerFlexCenter">
                    <h1 id={"title"}>BỌỌLU</h1>
                    <div className="headerWrapper">
                        <div className="textInfo">
                            <ul>
                                <li>Your personal football stats</li>
                                <li>League tables for your favorite team</li>
                                <li>Match schedule for your favorite team</li>
                            </ul>
                        </div>
                        <img id="headerImage" src={footballPlayer} alt="football player" />
                    </div>
                   
                </div>

                <div className="containerFlexCenter">
                    {isAuthorized? userHome: guestHome}
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
