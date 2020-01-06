import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";
import NavBar from '../navBar/navBar';
import Sidebar from "../sidebar/sidebar";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { removeTeam } from '../../actions/authActions'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    componentDidMount() { }
    componentWillUnmount() { }

    handleDelete = (username) => {
        this.props.deleteUser(username);
    }   
    
    render() {
        const { user } = this.props.auth;

        return (
            <div>
                <NavBar/>
                <h2>Username: {user.username}</h2>
                <Sidebar model={this.props.model}/>
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
  )(Profile);